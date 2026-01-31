<template>
  <div id="app" class="app-container">
    <!-- SIDEBAR -->
    <aside class="sidebar" :class="{ 'sidebar--collapsed': sidebarCollapsed }">
      <div class="sidebar__header" @click="sidebarCollapsed = !sidebarCollapsed">
        <div class="sidebar__logo">
          <i class="ph-fill ph-globe-stand"></i>
        </div>
        <div v-show="!sidebarCollapsed">
          <h1 class="sidebar__title">MYTRIPS</h1>
          <p class="sidebar__subtitle">Ultimate</p>
        </div>
      </div>

      <nav class="sidebar__nav">
        <button
          v-for="view in views"
          :key="view.id"
          @click="currentView = view.id as ViewType"
          :id="`nav-${view.id}`"
          class="nav-item"
          :class="{ 'nav-item--active': currentView === view.id }"
          :title="view.label"
        >
          <i :class="`nav-item__icon ph ph-${view.icon}`"></i>
          <span v-show="!sidebarCollapsed">{{ view.label }}</span>
        </button>
        <a href="./myroadtrip.html" class="nav-item" title="Cultural Regions Map">
          <i class="nav-item__icon ph ph-globe-hemisphere-west"></i>
          <span v-show="!sidebarCollapsed">Cultural Regions Map</span>
        </a>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main-content">
      <!-- Header -->
      <header class="header">
        <div>
          <h2 id="page-title" class="header__title">{{ currentViewTitle }}</h2>
          <p class="header__subtitle">
            <span id="system-clock">{{ currentTime }}</span> • {{ totalCities }} Cities Loaded
          </p>
        </div>
      </header>

      <!-- Dynamic Viewport -->
      <div id="content-viewport" class="viewport">
        <!-- Dashboard View - Globe Only -->
        <div v-if="currentView === 'dashboard'" class="view-section fade-in viewport">
          <div ref="globeContainer" class="globe-container"></div>
          <!-- Globe Legend -->
          <div class="globe-legend">
            <div class="globe-legend__item"><span class="globe-legend__dot globe-legend__dot--red"></span> N. America</div>
            <div class="globe-legend__item"><span class="globe-legend__dot globe-legend__dot--green"></span> S. America</div>
            <div class="globe-legend__item"><span class="globe-legend__dot globe-legend__dot--blue"></span> Europe</div>
            <div class="globe-legend__item"><span class="globe-legend__dot globe-legend__dot--purple"></span> Asia</div>
            <div class="globe-legend__item"><span class="globe-legend__dot globe-legend__dot--amber"></span> Africa</div>
            <div class="globe-legend__item"><span class="globe-legend__dot globe-legend__dot--teal"></span> Oceania</div>
          </div>
        </div>

        <!-- Atlas View -->
        <div v-if="currentView === 'atlas'" class="view-section fade-in atlas-view">
          <div ref="atlasMapContainer" id="map-main" class="atlas-map"></div>
          <!-- Map Layer Controls -->
          <div class="atlas-controls glass">
            <h4 class="atlas-controls__title">Map Layers</h4>
            <div class="atlas-controls__buttons">
              <button
                v-for="mode in mapModes"
                :key="mode.id"
                @click="setMapMode(mode.id)"
                class="atlas-controls__btn"
                :class="{ 'atlas-controls__btn--active': currentMapMode === mode.id }"
              >
                <i class="ph ph-map-pin"></i> {{ mode.name }}
              </button>
            </div>
          </div>
          <!-- Map Legend -->
          <div v-if="showMapLegend" class="atlas-legend glass">
            <div class="atlas-legend__content" v-html="mapLegendContent"></div>
          </div>
        </div>

        <!-- Collections View -->
        <div v-if="currentView === 'themes'" class="view-section fade-in viewport--scrollable">
          <div class="collections-header">
            <h3 class="collections-header__title">Curated Collections</h3>
            <p class="collections-header__subtitle">Explore the world through 16 unique lenses.</p>
          </div>
          <div class="themes-grid">
            <div
              v-for="theme in THEMES"
              :key="theme.id"
              @click="openTheme(theme)"
              class="theme-card"
            >
              <img :src="`https://loremflickr.com/600/400/${theme.img.split(',')[0]}/all`" class="theme-card__img" />
              <div class="theme-card__overlay"></div>
              <div class="theme-card__content">
                <div class="theme-card__header">
                  <i :class="`ph-fill ph-${theme.icon} theme-card__icon`"></i>
                  <h4 class="theme-card__title">{{ theme.title }}</h4>
                </div>
                <p class="theme-card__desc">{{ theme.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Theme Overlay Modal -->
        <div v-if="selectedTheme" class="theme-overlay" :class="{ 'theme-overlay--visible': themeOverlayVisible }">
          <div class="theme-overlay__slideshow">
            <div class="theme-overlay__gradient"></div>
            <img
              v-for="(src, idx) in slideshowImages"
              :key="idx"
              :src="src"
              class="slide-img"
              :class="{ 'active': idx === currentSlide }"
            />
          </div>
          <div class="theme-overlay__left">
            <button @click="closeTheme" class="theme-overlay__back">
              <i class="ph-bold ph-arrow-left"></i> Back
            </button>
            <div class="theme-overlay__info">
              <div class="theme-overlay__icon">
                <i :class="`ph-fill ph-${selectedTheme.icon}`"></i>
              </div>
              <h1 class="theme-overlay__title">{{ selectedTheme.title }}</h1>
              <p class="theme-overlay__desc">{{ selectedTheme.desc }}</p>
              <div class="theme-overlay__count glass">
                <div class="theme-overlay__count-label">Cities Included</div>
                <div class="theme-overlay__count-value">{{ selectedTheme.query.length }}</div>
              </div>
            </div>
          </div>
          <div class="theme-overlay__right">
            <div class="theme-overlay__map-container">
              <div ref="themeMapContainer" id="theme-map" class="theme-overlay__map"></div>
              <div class="theme-overlay__map-label">Filtered View</div>
            </div>
          </div>
        </div>

        <!-- Timeline View -->
        <div v-if="currentView === 'timeline'" class="view-section fade-in viewport--scrollable">
          <!-- Timeline Stats -->
          <div class="timeline-stats">
            <div class="timeline-stat">
              <span class="timeline-stat__value">{{ timelineStats.totalContinents }}</span>
              <span class="timeline-stat__label">Continents</span>
            </div>
            <div class="timeline-stat">
              <span class="timeline-stat__value">{{ timelineStats.totalCountries }}</span>
              <span class="timeline-stat__label">Countries</span>
            </div>
            <div class="timeline-stat">
              <span class="timeline-stat__value">{{ timelineStats.totalRegions }}</span>
              <span class="timeline-stat__label">Nomad Regions</span>
            </div>
            <div class="timeline-stat">
              <span class="timeline-stat__value">{{ timelineStats.totalCities }}</span>
              <span class="timeline-stat__label">Cities</span>
            </div>
          </div>

          <!-- Timeline Filters -->
          <div class="timeline-filters">
            <select v-model="timelineFilter.continent" class="timeline-select">
              <option value="">All Continents</option>
              <option v-for="c in uniqueContinents" :key="c" :value="c">{{ c }}</option>
            </select>
            <select v-model="timelineFilter.country" class="timeline-select">
              <option value="">All Countries</option>
              <option v-for="c in uniqueCountries" :key="c" :value="c">{{ c }}</option>
            </select>
            <select v-model="timelineFilter.region" class="timeline-select">
              <option value="">All Regions</option>
              <option v-for="r in uniqueRegions" :key="r" :value="r">{{ r }}</option>
            </select>
            <button class="timeline-btn" @click="resetFilters">Reset</button>
          </div>

          <!-- Timeline Table -->
          <div class="timeline-table-wrap">
            <table class="timeline-table">
              <thead>
                <tr>
                  <th @click="sortTimeline('continent')" class="sortable">Continent <i :class="sortIcon('continent')"></i></th>
                  <th @click="sortTimeline('country')" class="sortable">Country <i :class="sortIcon('country')"></i></th>
                  <th @click="sortTimeline('nomadRegion')" class="sortable">Region <i :class="sortIcon('nomadRegion')"></i></th>
                  <th @click="sortTimeline('state')" class="sortable">State <i :class="sortIcon('state')"></i></th>
                  <th @click="sortTimeline('city')" class="sortable">City <i :class="sortIcon('city')"></i></th>
                  <th @click="sortTimeline('dateIn')" class="sortable">Date In <i :class="sortIcon('dateIn')"></i></th>
                  <th @click="sortTimeline('days')" class="sortable">Days <i :class="sortIcon('days')"></i></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(trip, index) in filteredTimeline" :key="index">
                  <td>{{ trip.continent }}</td>
                  <td><span class="flag">{{ trip.countryFlag }}</span> {{ trip.country }}</td>
                  <td>{{ trip.nomadRegion }}</td>
                  <td>{{ trip.state }}</td>
                  <td>{{ trip.city }}</td>
                  <td>{{ trip.dateIn }}</td>
                  <td><span class="days-badge">{{ trip.days }}d</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Analytics/Stats View - Organized by Topics -->
        <div v-if="currentView === 'analytics'" class="view-section fade-in viewport--scrollable">

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 1: OVERVIEW - Key Performance Indicators                 -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-chart-line-up"></i> Overview</h2>
            </div>

          <!-- KPI Cards - Row 1: Main Stats -->
          <div class="stats-grid stats-grid--5col">
            <div class="stat-card stat-card--compact">
              <div class="stat-card__label">Continents</div>
              <div class="stat-card__value">{{ totalContinents }}</div>
            </div>
            <div class="stat-card stat-card--compact stat-card--purple">
              <div class="stat-card__label">Countries</div>
              <div class="stat-card__value">{{ totalCountries }}</div>
            </div>
            <div class="stat-card stat-card--compact stat-card--cyan">
              <div class="stat-card__label">NomadMania Regions</div>
              <div class="stat-card__value">{{ totalNomadRegions }}</div>
            </div>
            <div class="stat-card stat-card--compact">
              <div class="stat-card__label">Cities</div>
              <div class="stat-card__value">{{ totalCities }}</div>
            </div>
            <div class="stat-card stat-card--compact stat-card--amber">
              <div class="stat-card__label">Time Abroad</div>
              <div class="stat-card__value">{{ (totalDaysAbroad / 365).toFixed(1) }}y</div>
            </div>
          </div>

          <!-- KPI Cards - Row 2: World Percentages -->
          <div class="stats-grid stats-grid--3col">
            <div class="stat-card stat-card--compact stat-card--purple">
              <div class="stat-card__label">% Countries (UN)</div>
              <div class="stat-card__value">{{ Math.round(totalCountries / WORLD_COUNTRIES_UN * 100) }}%</div>
              <div class="stat-card__meta stat-card__meta--purple">{{ totalCountries }}/{{ WORLD_COUNTRIES_UN }}</div>
            </div>
            <div class="stat-card stat-card--compact stat-card--cyan">
              <div class="stat-card__label">% NomadMania Regions</div>
              <div class="stat-card__value">{{ Math.round(totalNomadRegions / WORLD_NOMAD_REGIONS * 100) }}%</div>
              <div class="stat-card__meta stat-card__meta--cyan">{{ totalNomadRegions }}/{{ WORLD_NOMAD_REGIONS }}</div>
            </div>
            <div class="stat-card stat-card--compact">
              <div class="stat-card__label">Cities Visited</div>
              <div class="stat-card__value">{{ totalCities }}</div>
              <div class="stat-card__meta"><i class="ph-bold ph-map-pin"></i> unique</div>
            </div>
          </div>

          </div><!-- end stats-topic: Overview -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 2: RANKINGS - Top Countries & Regions                   -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-ranking"></i> Rankings</h2>
            </div>

          <!-- Long Stay Cities Section -->
          <h3 class="section-title"><i class="ph-fill ph-house"></i> Long Stay Cities</h3>
          <div class="long-stays-section">
            <!-- Over 6 Months -->
            <div class="long-stay-card long-stay-card--gold" v-if="longStaysOver6Months.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-star"></i> Extended Stays (6+ months)</h3>
              <div class="long-stay-card__items">
                <div v-for="trip in longStaysOver6Months" :key="trip.city + trip.dateIn" class="long-stay-item">
                  <div class="long-stay-item__city">{{ trip.city }}</div>
                  <div class="long-stay-item__country"><span class="long-stay-item__flag">{{ trip.countryFlag }}</span> {{ trip.country }}</div>
                  <div class="long-stay-item__duration">{{ Math.round(trip.days / 30) }} months</div>
                </div>
              </div>
            </div>

            <!-- 1.5-6 Months -->
            <div class="long-stay-card long-stay-card--cyan" v-if="longStays1to6Months.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-house"></i> Long Stays (1.5-6 months)</h3>
              <div class="long-stay-card__items">
                <div v-for="trip in longStays1to6Months" :key="trip.city + trip.dateIn" class="long-stay-item">
                  <div class="long-stay-item__city">{{ trip.city }}</div>
                  <div class="long-stay-item__country"><span class="long-stay-item__flag">{{ trip.countryFlag }}</span> {{ trip.country }}</div>
                  <div class="long-stay-item__duration">{{ trip.days >= 60 ? Math.round(trip.days / 30) + ' months' : trip.days + ' days' }}</div>
                </div>
              </div>
            </div>

            <!-- 2 Weeks to 5 Weeks -->
            <div class="long-stay-card long-stay-card--purple" v-if="longStays2WeeksTo1Month.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-calendar"></i> Medium Stays (2-5 weeks)</h3>
              <div class="long-stay-card__items">
                <div v-for="trip in longStays2WeeksTo1Month" :key="trip.city + trip.dateIn" class="long-stay-item">
                  <div class="long-stay-item__city">{{ trip.city }}</div>
                  <div class="long-stay-item__country"><span class="long-stay-item__flag">{{ trip.countryFlag }}</span> {{ trip.country }}</div>
                  <div class="long-stay-item__duration">{{ trip.days }} days</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Country Rankings by Time Spent -->
          <h3 class="section-title"><i class="ph-fill ph-clock"></i> Most Time Countries</h3>
          <div class="long-stays-section">
            <!-- 1+ Year -->
            <div class="long-stay-card long-stay-card--gold" v-if="countriesByTimeOver1Year.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-clock-clockwise"></i> Most Time (1+ year)</h3>
              <div class="long-stay-card__items">
                <div v-for="country in countriesByTimeOver1Year" :key="country.country" class="long-stay-item">
                  <div class="long-stay-item__city"><span class="long-stay-item__flag">{{ country.flag }}</span> {{ country.country }}</div>
                  <div class="long-stay-item__duration">{{ (country.days / 365).toFixed(1) }} years</div>
                </div>
              </div>
            </div>

            <!-- 3-12 Months -->
            <div class="long-stay-card long-stay-card--cyan" v-if="countriesByTime3To12Months.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-clock"></i> Long Time (3-12 months)</h3>
              <div class="long-stay-card__items">
                <div v-for="country in countriesByTime3To12Months" :key="country.country" class="long-stay-item">
                  <div class="long-stay-item__city"><span class="long-stay-item__flag">{{ country.flag }}</span> {{ country.country }}</div>
                  <div class="long-stay-item__duration">{{ Math.round(country.days / 30) }} months</div>
                </div>
              </div>
            </div>

            <!-- 1-3 Months -->
            <div class="long-stay-card long-stay-card--purple" v-if="countriesByTime1To3Months.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-hourglass-medium"></i> Medium Time (1-3 months)</h3>
              <div class="long-stay-card__items">
                <div v-for="country in countriesByTime1To3Months" :key="country.country" class="long-stay-item">
                  <div class="long-stay-item__city"><span class="long-stay-item__flag">{{ country.flag }}</span> {{ country.country }}</div>
                  <div class="long-stay-item__duration">{{ country.days }} days</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Country Rankings by Cities Visited -->
          <h3 class="section-title"><i class="ph-fill ph-map-pin"></i> Most Visited Countries</h3>
          <div class="long-stays-section">
            <!-- 10+ Cities -->
            <div class="long-stay-card long-stay-card--gold" v-if="countriesByCitiesOver10.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-buildings"></i> Most Cities (10+)</h3>
              <div class="long-stay-card__items">
                <div v-for="country in countriesByCitiesOver10" :key="country.country" class="long-stay-item">
                  <div class="long-stay-item__city"><span class="long-stay-item__flag">{{ country.flag }}</span> {{ country.country }}</div>
                  <div class="long-stay-item__duration">{{ country.cities }} cities</div>
                </div>
              </div>
            </div>

            <!-- 5-9 Cities -->
            <div class="long-stay-card long-stay-card--cyan" v-if="countriesByCities5To9.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-city"></i> Many Cities (5-9)</h3>
              <div class="long-stay-card__items">
                <div v-for="country in countriesByCities5To9" :key="country.country" class="long-stay-item">
                  <div class="long-stay-item__city"><span class="long-stay-item__flag">{{ country.flag }}</span> {{ country.country }}</div>
                  <div class="long-stay-item__duration">{{ country.cities }} cities</div>
                </div>
              </div>
            </div>

            <!-- 2-4 Cities -->
            <div class="long-stay-card long-stay-card--purple" v-if="countriesByCities2To4.length > 0">
              <h3 class="long-stay-card__title"><i class="ph-fill ph-map-pin"></i> Few Cities (2-4)</h3>
              <div class="long-stay-card__items">
                <div v-for="country in countriesByCities2To4" :key="country.country" class="long-stay-item">
                  <div class="long-stay-item__city"><span class="long-stay-item__flag">{{ country.flag }}</span> {{ country.country }}</div>
                  <div class="long-stay-item__duration">{{ country.cities }} cities</div>
                </div>
              </div>
            </div>
          </div>

          </div><!-- end stats-topic: Rankings -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 2B: TIMELINE - Country Changes Over Time                 -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-calendar"></i> Timeline</h2>
            </div>

            <!-- Row 1: 2015-2021, 2022, 2023 -->
            <div class="country-timeline__row">
              <div v-for="group in timelineByYearGroups.slice(0, 3)" :key="group.label" class="country-timeline__col">
                <div class="country-timeline__header">{{ group.label }}</div>
                <div class="country-timeline__entries">
                  <div v-for="(entry, idx) in group.entries" :key="idx" class="country-timeline__entry">
                    <span class="country-timeline__dates">{{ formatTimelineDate(entry.dateIn) }}–{{ formatTimelineDate(entry.dateOut) }}</span>
                    <span class="country-timeline__days">({{ String(entry.days).padStart(3, ' ') }}d)</span>
                    <span class="country-timeline__iso">{{ entry.iso }}</span>
                    <span class="country-timeline__flag">{{ entry.flag }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: 2024, 2025, 2026 -->
            <div class="country-timeline__row">
              <div v-for="group in timelineByYearGroups.slice(3, 6)" :key="group.label" class="country-timeline__col">
                <div class="country-timeline__header">{{ group.label }}</div>
                <div class="country-timeline__entries">
                  <div v-for="(entry, idx) in group.entries" :key="idx" class="country-timeline__entry">
                    <span class="country-timeline__dates">{{ formatTimelineDate(entry.dateIn) }}–{{ formatTimelineDate(entry.dateOut) }}</span>
                    <span class="country-timeline__days">({{ String(entry.days).padStart(3, ' ') }}d)</span>
                    <span class="country-timeline__iso">{{ entry.iso }}</span>
                    <span class="country-timeline__flag">{{ entry.flag }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cities by Year/Month Grid -->
            <div class="year-month-grids">
              <div class="year-month-grid">
                <h4 class="year-month-grid__title"><i class="ph-fill ph-buildings"></i> Cities by Month</h4>
                <div class="year-month-grid__header">
                  <div class="year-month-grid__label">Year</div>
                  <div v-for="m in 12" :key="m" class="year-month-grid__month">{{ String(m).padStart(2, '0') }}</div>
                </div>
                <div v-for="row in citiesByYearMonth" :key="row.year" class="year-month-grid__row">
                  <div class="year-month-grid__year">{{ row.year }}</div>
                  <div v-for="cell in row.months" :key="cell.month" class="year-month-grid__cell" :class="{ 'year-month-grid__cell--empty': cell.count === 0 }">
                    {{ cell.count || '–' }}
                  </div>
                </div>
              </div>

              <div class="year-month-grid year-month-grid--purple">
                <h4 class="year-month-grid__title"><i class="ph-fill ph-flag"></i> Countries by Month</h4>
                <div class="year-month-grid__header">
                  <div class="year-month-grid__label">Year</div>
                  <div v-for="m in 12" :key="m" class="year-month-grid__month">{{ String(m).padStart(2, '0') }}</div>
                </div>
                <div v-for="row in countriesByYearMonth" :key="row.year" class="year-month-grid__row">
                  <div class="year-month-grid__year">{{ row.year }}</div>
                  <div v-for="cell in row.months" :key="cell.month" class="year-month-grid__cell" :class="{ 'year-month-grid__cell--empty': cell.count === 0 }">
                    {{ cell.count || '–' }}
                  </div>
                </div>
              </div>
            </div>
          </div><!-- end stats-topic: Timeline -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 3: GEOGRAPHIC COVERAGE - World Distribution             -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-globe"></i> Geographic Coverage</h2>
            </div>

          <!-- Cultural Regions Stats Table -->
          <div class="cultural-regions-section">
            <h3 class="section-title"><i class="ph-fill ph-globe-hemisphere-west"></i> Cultural Regions Coverage</h3>
            <div class="cultural-regions-table-wrap">
              <table class="cultural-regions-table">
                <thead>
                  <tr>
                    <th>Region / Group</th>
                    <th>Visited</th>
                    <th>Total</th>
                    <th>Coverage</th>
                    <th>Flags</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="region in culturalRegionsStats" :key="region.region">
                    <tr class="region-row">
                      <td><span class="region-emoji">{{ region.emoji }}</span> <strong>{{ region.region }}</strong></td>
                      <td class="num">{{ region.visited }}</td>
                      <td class="num">{{ region.total }}</td>
                      <td class="num">
                        <div class="progress-bar">
                          <div class="progress-bar__fill" :style="{ width: region.percentage + '%' }"></div>
                          <span class="progress-bar__text">{{ region.percentage }}%</span>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr v-for="group in region.groups" :key="group.name" class="group-row">
                      <td class="group-name"><span class="group-emoji">{{ group.emoji }}</span> {{ group.name }}</td>
                      <td class="num">{{ group.visited }}</td>
                      <td class="num">{{ group.total }}</td>
                      <td class="num">
                        <div class="progress-bar progress-bar--small">
                          <div class="progress-bar__fill" :style="{ width: group.percentage + '%' }"></div>
                          <span class="progress-bar__text">{{ group.percentage }}%</span>
                        </div>
                      </td>
                      <td class="flags-cell">{{ group.flags }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>

          </div><!-- end stats-topic: Geographic Coverage -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 4: CULTURAL & LINGUISTIC - Cultural Diversity           -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-translate"></i> Cultural & Linguistic</h2>
            </div>

          <!-- Language Stats Section - Family Tree -->
          <div class="stats-section">
            <h3 class="section-title"><i class="ph-fill ph-translate"></i> Languages Spoken <span class="section-title__count">{{ languageStats.length }} languages</span></h3>
            <div class="language-families">
              <div v-for="familyGroup in languagesByFamily" :key="familyGroup.family" class="language-family">
                <div class="language-family__header">
                  <span class="language-family__name">{{ familyGroup.family }}</span>
                  <span class="language-family__days">{{ familyGroup.totalDays.toLocaleString() }} days</span>
                </div>
                <div class="language-family__branches">
                  <div v-for="branch in familyGroup.branches" :key="branch.branch" class="language-branch">
                    <div class="language-branch__header">
                      <span class="language-branch__name">{{ branch.branch }}</span>
                    </div>
                    <div class="language-branch__langs">
                      <div v-for="lang in branch.languages" :key="lang.language" class="language-item">
                        <span class="language-item__icon">{{ lang.icon }}</span>
                        <span class="language-item__name">{{ lang.language }}</span>
                        <div class="language-item__bar">
                          <div class="language-item__fill" :style="{ width: Math.min(100, lang.days / 30) + '%' }"></div>
                        </div>
                        <span class="language-item__days">{{ lang.days }}d</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Culture Stats Section -->
          <div class="stats-section">
            <h3 class="section-title"><i class="ph-fill ph-globe-simple"></i> Cultural Zones</h3>
            <div class="stats-cards-grid">
              <div v-for="culture in cultureStats" :key="culture.culture" class="mini-stat-card">
                <div class="mini-stat-card__title">{{ culture.culture }}</div>
                <div class="mini-stat-card__stats">
                  <span class="mini-stat-card__value">{{ culture.cities }} cities</span>
                  <span class="mini-stat-card__separator">•</span>
                  <span class="mini-stat-card__value">{{ culture.days }}d</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Nomad Regions Stats Section -->
          <div class="stats-section">
            <h3 class="section-title"><i class="ph-fill ph-compass"></i> Nomad Regions ({{ uniqueNomadRegionsCount }})</h3>
            <div class="stats-table-wrap">
              <table class="stats-table">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th class="num">Cities</th>
                    <th class="num">Days</th>
                    <th class="num">Countries</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="region in nomadRegionStats" :key="region.region">
                    <td>{{ region.region }}</td>
                    <td class="num">{{ region.cities }}</td>
                    <td class="num">{{ region.days }}</td>
                    <td class="num">{{ region.countries }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          </div><!-- end stats-topic: Cultural & Linguistic -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 5: SPECIAL CATEGORIES - Geographic Features             -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-map-pin"></i> Special Categories</h2>
            </div>

          <!-- Geographic Stats -->
          <div class="geo-stats-section">
            <h3 class="section-title"><i class="ph-fill ph-map-pin"></i> Geographic Features</h3>
            <div class="geo-stats-grid">
              <div class="geo-stat-card">
                <div class="geo-stat-card__icon"><i class="ph-fill ph-island"></i></div>
                <div class="geo-stat-card__content">
                  <div class="geo-stat-card__value">{{ islandDestinations.length }}</div>
                  <div class="geo-stat-card__label">Islands Visited</div>
                </div>
              </div>
              <div class="geo-stat-card">
                <div class="geo-stat-card__icon"><i class="ph-fill ph-waves"></i></div>
                <div class="geo-stat-card__content">
                  <div class="geo-stat-card__value">{{ coastalDestinations.length }}</div>
                  <div class="geo-stat-card__label">Coastal Cities</div>
                </div>
              </div>
              <div class="geo-stat-card">
                <div class="geo-stat-card__icon"><i class="ph-fill ph-bank"></i></div>
                <div class="geo-stat-card__content">
                  <div class="geo-stat-card__value">{{ capitalCities.length }}</div>
                  <div class="geo-stat-card__label">Capital Cities</div>
                </div>
              </div>
              <div class="geo-stat-card">
                <div class="geo-stat-card__icon"><i class="ph-fill ph-map-trifold"></i></div>
                <div class="geo-stat-card__content">
                  <div class="geo-stat-card__value">{{ uniqueStates }}</div>
                  <div class="geo-stat-card__label">States/Provinces</div>
                </div>
              </div>
              <div class="geo-stat-card">
                <div class="geo-stat-card__icon"><i class="ph-fill ph-translate"></i></div>
                <div class="geo-stat-card__content">
                  <div class="geo-stat-card__value">{{ uniqueLanguagesCount }}</div>
                  <div class="geo-stat-card__label">Languages</div>
                </div>
              </div>
              <div class="geo-stat-card">
                <div class="geo-stat-card__icon"><i class="ph-fill ph-users-three"></i></div>
                <div class="geo-stat-card__content">
                  <div class="geo-stat-card__value">{{ uniqueCulturesCount }}</div>
                  <div class="geo-stat-card__label">Cultures</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hemisphere Distribution -->
          <div class="hemisphere-section">
            <h3 class="section-title"><i class="ph-fill ph-globe-hemisphere-east"></i> Hemisphere Distribution</h3>
            <div class="hemisphere-grid">
              <div class="hemisphere-card">
                <div class="hemisphere-card__label">Northern</div>
                <div class="hemisphere-card__value">{{ hemisphereStats.northern }}</div>
                <div class="hemisphere-bar">
                  <div class="hemisphere-bar__fill hemisphere-bar__fill--north" :style="{ width: (hemisphereStats.northern / totalCities * 100) + '%' }"></div>
                </div>
              </div>
              <div class="hemisphere-card">
                <div class="hemisphere-card__label">Southern</div>
                <div class="hemisphere-card__value">{{ hemisphereStats.southern }}</div>
                <div class="hemisphere-bar">
                  <div class="hemisphere-bar__fill hemisphere-bar__fill--south" :style="{ width: (hemisphereStats.southern / totalCities * 100) + '%' }"></div>
                </div>
              </div>
              <div class="hemisphere-card">
                <div class="hemisphere-card__label">Eastern</div>
                <div class="hemisphere-card__value">{{ hemisphereStats.eastern }}</div>
                <div class="hemisphere-bar">
                  <div class="hemisphere-bar__fill hemisphere-bar__fill--east" :style="{ width: (hemisphereStats.eastern / totalCities * 100) + '%' }"></div>
                </div>
              </div>
              <div class="hemisphere-card">
                <div class="hemisphere-card__label">Western</div>
                <div class="hemisphere-card__value">{{ hemisphereStats.western }}</div>
                <div class="hemisphere-bar">
                  <div class="hemisphere-bar__fill hemisphere-bar__fill--west" :style="{ width: (hemisphereStats.western / totalCities * 100) + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          </div><!-- end stats-topic: Special Categories -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 6: TIME ANALYSIS - Duration & Patterns                  -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-clock"></i> Time Analysis</h2>
            </div>

          <!-- Trip Duration Categories -->
          <div class="duration-section">
            <h3 class="section-title"><i class="ph-fill ph-hourglass"></i> Trip Duration Breakdown</h3>
            <div class="duration-grid">
              <div class="duration-card">
                <div class="duration-card__value">{{ tripsByDurationCategory.day1 }}</div>
                <div class="duration-card__label">Day trips</div>
              </div>
              <div class="duration-card">
                <div class="duration-card__value">{{ tripsByDurationCategory.days2_3 }}</div>
                <div class="duration-card__label">2-3 Days</div>
              </div>
              <div class="duration-card">
                <div class="duration-card__value">{{ tripsByDurationCategory.week1 }}</div>
                <div class="duration-card__label">4-7 Days</div>
              </div>
              <div class="duration-card">
                <div class="duration-card__value">{{ tripsByDurationCategory.weeks2_4 }}</div>
                <div class="duration-card__label">2-4 Weeks</div>
              </div>
              <div class="duration-card">
                <div class="duration-card__value">{{ tripsByDurationCategory.months1_3 }}</div>
                <div class="duration-card__label">1-3 Months</div>
              </div>
              <div class="duration-card">
                <div class="duration-card__value">{{ tripsByDurationCategory.months3_6 }}</div>
                <div class="duration-card__label">3-6 Months</div>
              </div>
              <div class="duration-card duration-card--highlight">
                <div class="duration-card__value">{{ tripsByDurationCategory.months6plus }}</div>
                <div class="duration-card__label">6+ Months</div>
              </div>
            </div>
            <div class="duration-summary">
              <span class="duration-summary__item">Avg. Stay: <strong>{{ averageStayDuration }} days</strong></span>
              <span class="duration-summary__separator">•</span>
              <span class="duration-summary__item">Years Active: <strong>{{ yearRangeStats.yearsActive }}</strong></span>
              <span class="duration-summary__separator">•</span>
              <span class="duration-summary__item">From <strong>{{ yearRangeStats.firstYear }}</strong> to <strong>{{ yearRangeStats.lastYear }}</strong></span>
            </div>
          </div>

          <!-- Days by Continent -->
          <div class="continent-days-section">
            <h3 class="section-title"><i class="ph-fill ph-globe"></i> Days by Continent</h3>
            <div class="continent-days-grid">
              <div v-for="cont in daysByContinent" :key="cont.continent" class="continent-days-card">
                <div class="continent-days-card__name">{{ cont.continent }}</div>
                <div class="continent-days-card__bar">
                  <div class="continent-days-card__fill" :style="{ width: (cont.days / totalDaysAbroad * 100) + '%', backgroundColor: continentColors[cont.continent] || '#94a3b8' }"></div>
                </div>
                <div class="continent-days-card__value">{{ cont.days >= 365 ? (cont.days / 365).toFixed(1) + ' yrs' : cont.days + 'd' }}</div>
              </div>
            </div>
          </div>

          <!-- Geographic Extremes -->
          <div class="extremes-section">
            <h3 class="section-title"><i class="ph-fill ph-compass-rose"></i> Geographic Extremes</h3>
            <div class="extremes-grid">
              <div class="extreme-card">
                <div class="extreme-card__direction">⬆️ Northernmost</div>
                <div class="extreme-card__city">{{ geographicExtremes.northernmost?.city }}</div>
                <div class="extreme-card__country">{{ geographicExtremes.northernmost?.country }}</div>
                <div class="extreme-card__coord">{{ geographicExtremes.northernmost?.lat.toFixed(2) }}°N</div>
              </div>
              <div class="extreme-card">
                <div class="extreme-card__direction">⬇️ Southernmost</div>
                <div class="extreme-card__city">{{ geographicExtremes.southernmost?.city }}</div>
                <div class="extreme-card__country">{{ geographicExtremes.southernmost?.country }}</div>
                <div class="extreme-card__coord">{{ Math.abs(geographicExtremes.southernmost?.lat || 0).toFixed(2) }}°S</div>
              </div>
              <div class="extreme-card">
                <div class="extreme-card__direction">➡️ Easternmost</div>
                <div class="extreme-card__city">{{ geographicExtremes.easternmost?.city }}</div>
                <div class="extreme-card__country">{{ geographicExtremes.easternmost?.country }}</div>
                <div class="extreme-card__coord">{{ geographicExtremes.easternmost?.lng.toFixed(2) }}°E</div>
              </div>
              <div class="extreme-card">
                <div class="extreme-card__direction">⬅️ Westernmost</div>
                <div class="extreme-card__city">{{ geographicExtremes.westernmost?.city }}</div>
                <div class="extreme-card__country">{{ geographicExtremes.westernmost?.country }}</div>
                <div class="extreme-card__coord">{{ Math.abs(geographicExtremes.westernmost?.lng || 0).toFixed(2) }}°W</div>
              </div>
            </div>
          </div>

          </div><!-- end stats-topic: Time Analysis -->

          <!-- ═══════════════════════════════════════════════════════════════ -->
          <!-- SECTION 7: DATA BREAKDOWN - Detailed Tables                     -->
          <!-- ═══════════════════════════════════════════════════════════════ -->
          <div class="stats-topic">
            <div class="stats-topic__header">
              <h2 class="stats-topic__title"><i class="ph-fill ph-list-numbers"></i> Data Breakdown</h2>
            </div>

          <!-- BREAKDOWN TABLES -->
          <div class="breakdown-section">
            <h3 class="section-title"><i class="ph-fill ph-list-numbers"></i> Coverage Breakdown</h3>
            <div class="breakdown-grid">
              <!-- Countries Breakdown -->
              <div class="breakdown-card">
                <div class="breakdown-card__header">
                  <i class="ph-fill ph-flag"></i>
                  <span>Countries</span>
                  <strong>{{ countriesBreakdown.total }}</strong>
                </div>
                <table class="breakdown-table">
                  <thead><tr><th>By Continent</th><th>#</th><th>Flags</th></tr></thead>
                  <tbody>
                    <tr v-for="row in countriesBreakdown.byContinent" :key="row.name">
                      <td>{{ row.name }}</td>
                      <td class="num">{{ row.count }}</td>
                      <td class="flags">{{ row.flags }}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="breakdown-table breakdown-table--mt">
                  <thead><tr><th>By Culture</th><th>#</th><th>Flags</th></tr></thead>
                  <tbody>
                    <tr v-for="row in countriesBreakdown.byCulture" :key="row.name">
                      <td>{{ row.name }}</td>
                      <td class="num">{{ row.count }}</td>
                      <td class="flags">{{ row.flags }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Cities Breakdown -->
              <div class="breakdown-card">
                <div class="breakdown-card__header">
                  <i class="ph-fill ph-buildings"></i>
                  <span>Cities</span>
                  <strong>{{ citiesBreakdown.total }}</strong>
                </div>
                <table class="breakdown-table">
                  <thead><tr><th>By Continent</th><th>#</th></tr></thead>
                  <tbody>
                    <tr v-for="row in citiesBreakdown.byContinent" :key="row.name">
                      <td>{{ row.name }}</td>
                      <td class="num">{{ row.count }}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="breakdown-table breakdown-table--mt">
                  <thead><tr><th>By Culture</th><th>#</th></tr></thead>
                  <tbody>
                    <tr v-for="row in citiesBreakdown.byCulture" :key="row.name">
                      <td>{{ row.name }}</td>
                      <td class="num">{{ row.count }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Cities by Country -->
              <div class="breakdown-card breakdown-card--wide">
                <div class="breakdown-card__header">
                  <i class="ph-fill ph-map-pin"></i>
                  <span>Cities by Country</span>
                </div>
                <div class="breakdown-country-grid">
                  <div v-for="row in citiesBreakdown.byCountry" :key="row.name" class="breakdown-country-item">
                    <span class="breakdown-country-item__flag">{{ row.flag }}</span>
                    <span class="breakdown-country-item__name">{{ row.name }}</span>
                    <span class="breakdown-country-item__count">{{ row.count }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          </div><!-- end stats-topic: Data Breakdown -->

        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import type { City, ViewType } from '@/types/mytrips';
import { initData } from '@/utils/mytrips-data';
import { travelData } from '@/data/travel-data';
import Chart from 'chart.js/auto';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

declare const L: {
  map: (el: HTMLElement, options: any) => any;
  tileLayer: (url: string, options?: any) => any;
  circleMarker: (latlng: [number, number], options: any) => any;
  latLngBounds: (coords: [number, number][]) => any;
  geoJSON: (data: any, options?: any) => any;
};

interface TripWithDuration {
  city: string;
  country: string;
  countryFlag: string;
  days: number;
  dateIn: string;
  dateOut: string;
}

const currentView = ref<ViewType>('dashboard');
const currentTime = ref('Initializing Clock...');
const DB = ref<City[]>([]);
const chartVelocity = ref<HTMLCanvasElement | null>(null);
const chartContinents = ref<HTMLCanvasElement | null>(null);
const globeContainer = ref<HTMLElement | null>(null);
const atlasMapContainer = ref<HTMLElement | null>(null);
const sidebarCollapsed = ref(true);

// Timeline state
const timelineFilter = ref({ continent: '', country: '', region: '' });
const timelineSort = ref({ field: 'dateIn' as string, asc: true });

// Atlas map state
let atlasMap: any = null;
const currentMapMode = ref('pin');
const showMapLegend = ref(false);
const mapLegendContent = ref('');
const mapModes = [
  { id: 'pin', name: 'Pins' },
  { id: 'country', name: 'Countries' },
  { id: 'region', name: 'NomadMania Regions' },
  { id: 'rel', name: 'Religions' }
];

// Theme/Collections state
const themeMapContainer = ref<HTMLElement | null>(null);
let themeMap: any = null;
const selectedTheme = ref<any>(null);
const themeOverlayVisible = ref(false);
const slideshowImages = ref<string[]>([]);
const currentSlide = ref(0);
let slideInterval: number | null = null;

// 16 Curated Collections (from production)
const THEMES = [
  { id: 'finance', title: 'Financial Capitals', icon: 'briefcase', query: ['London','New York','Tokyo','Singapore','Hong Kong','Frankfurt','Zurich','Shanghai','Chicago'], img: 'city,skyscraper', desc: 'Global economic powerhouses defining the modern world.' },
  { id: 'ancient', title: 'Ancient History', icon: 'columns', query: ['Rome','Athens','Cairo','Luxor','Petra','Kyoto','Mexico City'], img: 'ruins,temple', desc: 'Walking in the footsteps of empires past.' },
  { id: 'tech', title: 'Tech Hubs', icon: 'cpu', query: ['San Francisco','Seattle','Shenzhen','Bangalore','Berlin','Stockholm'], img: 'technology,cyberpunk', desc: 'Centers of innovation and digital culture.' },
  { id: 'coffee', title: 'Coffee Culture', icon: 'coffee', query: ['Melbourne','Seattle','Vienna','Rome','Bogota','Hanoi'], img: 'coffee,cafe', desc: 'The best brews from espresso labs to traditional houses.' },
  { id: 'art', title: 'Art & Design', icon: 'palette', query: ['Paris','Florence','New York','Vienna','Amsterdam','Barcelona'], img: 'art,museum', desc: 'World-class galleries and street art scenes.' },
  { id: 'nature', title: 'Natural Wonders', icon: 'mountains', query: ['Banff','Reykjavik','Queenstown','Interlaken','Cape Town'], img: 'nature,mountain', desc: 'Breathtaking landscapes where nature dominates.' },
  { id: 'island', title: 'Island Life', icon: 'island', query: ['Bali','Santorini','Phuket','Hawaii','Fiji','Maldives'], img: 'beach,ocean', desc: 'Sun, sand, and isolation.' },
  { id: 'coldwar', title: 'Iron Curtain', icon: 'wall', query: ['Berlin','Moscow','Prague','Budapest','Warsaw'], img: 'concrete,soviet', desc: 'Relics of the East-West divide.' },
  { id: 'food', title: 'Gastronomy', icon: 'bowl-food', query: ['Lyon','Tokyo','San Sebastian','Oaxaca','Bologna','Bangkok'], img: 'food,market', desc: 'Culinary capitals of the world.' },
  { id: 'nordic', title: 'Nordic', icon: 'snowflake', query: ['Oslo','Stockholm','Copenhagen','Helsinki','Reykjavik'], img: 'snow,winter', desc: 'Minimalist design and arctic chill.' },
  { id: 'med', title: 'Mediterranean', icon: 'sun', query: ['Nice','Barcelona','Rome','Athens','Dubrovnik'], img: 'coast,summer', desc: 'Azure waters and olive groves.' },
  { id: 'wine', title: 'Wine Regions', icon: 'wine', query: ['Bordeaux','Florence','Cape Town','Mendoza','Napa'], img: 'vineyard,wine', desc: 'Terroirs of the world.' },
  { id: 'mega', title: 'Megacities', icon: 'buildings', query: ['Tokyo','Delhi','Shanghai','Sao Paulo','Cairo'], img: 'crowd,traffic', desc: 'Agglomerations exceeding 10 million people.' },
  { id: 'spiritual', title: 'Sacred Sites', icon: 'hands-praying', query: ['Varanasi','Jerusalem','Mecca','Lhasa','Vatican City'], img: 'temple,prayer', desc: 'Places of pilgrimage and significance.' },
  { id: 'port', title: 'Maritime', icon: 'anchor', query: ['Rotterdam','Hamburg','Singapore','Busan','Panama City'], img: 'ship,port', desc: 'Historic ports connecting the world.' },
  { id: 'music', title: 'Music Cities', icon: 'music-notes', query: ['Nashville','Liverpool','New Orleans','Vienna','Berlin'], img: 'concert,instrument', desc: 'Cities where rhythm is embedded in the streets.' }
];

// Cultural Regions Classification (from production Cultural Regions Map)
const CULTURAL_REGIONS = [
  {
    region: "EUROPE", emoji: "🔷",
    groups: [
      { name: "GERMANICS", emoji: "⚙️", countries: ["DE", "CH", "NL", "AT", "LI", "LU", "GB", "IE", "SE", "NO", "DK", "IS"] },
      { name: "GRECO-ROMANS", emoji: "🏛️", countries: ["FR", "BE", "MC", "ES", "PT", "AD", "IT", "VA", "MT", "SM", "GR", "CY", "RO", "MD"] },
      { name: "SLAVS", emoji: "🪆", countries: ["BG", "MK", "RS", "BA", "ME", "HR", "SI", "PL", "CZ", "SK", "UA", "RU", "BY"] },
      { name: "OTHERS", emoji: "🪨", countries: ["EE", "HU", "FI", "LT", "LV", "AL", "XK", "GE", "AM", "AZ"] }
    ]
  },
  {
    region: "AMERICAS", emoji: "🌎",
    groups: [
      { name: "ANGLO-AMERICA", emoji: "🦅", countries: ["US", "CA", "HT"] },
      { name: "SPANISH LATAM", emoji: "🪭", countries: ["MX", "GT", "HN", "SV", "NI", "CR", "PA", "AR", "CL", "PE", "BO", "EC", "CO", "VE", "PY", "CU", "DO", "UY"] },
      { name: "LUSO-AMERICA", emoji: "🦜", countries: ["BR"] }
    ]
  },
  {
    region: "OCEANIA", emoji: "🔥",
    groups: [
      { name: "AUSTRALASIA", emoji: "🦘", countries: ["AU"] },
      { name: "POLYNESIA", emoji: "🪶", countries: ["NZ", "WS", "TO", "TV"] },
      { name: "MICROMELANESIA", emoji: "🗿", countries: ["PW", "FM", "MH", "NR", "KI", "FJ", "PG", "SB", "VU"] }
    ]
  },
  {
    region: "ASIA", emoji: "🟣",
    groups: [
      { name: "ABRAHAMIC", emoji: "🕯️", countries: ["JO", "QA", "SA", "AE", "KW", "BH", "OM", "YE", "IQ", "SY", "LB", "PS", "TR", "KZ", "UZ", "TM", "KG", "IR", "AF", "PK", "TJ", "ID", "MY", "BD", "BN", "MV", "PH", "TL", "IL"] },
      { name: "HINDUS", emoji: "🧘", countries: ["IN", "NP"] },
      { name: "BUDDHIST & TAO", emoji: "🧘🏻‍♂️", countries: ["TH", "MM", "KH", "LA", "LK", "MN", "BT", "JP", "KR", "VN", "CN", "TW", "KP", "SG"] }
    ]
  },
  {
    region: "AFRICA", emoji: "🪨",
    groups: [
      { name: "MAGHREB & NORTH", emoji: "🫖", countries: ["MA", "DZ", "TN", "LY", "MR", "EG", "SD"] },
      { name: "ANGLOPHONE", emoji: "💎", countries: ["NG", "GH", "SL", "LR", "GM", "KE", "TZ", "UG", "RW", "BI", "SS", "ZA", "ZW", "ZM", "BW", "NA", "LS", "SZ", "MW"] },
      { name: "FRANCOPHONE", emoji: "🪘", countries: ["SN", "ML", "CI", "BF", "NE", "TG", "BJ", "GN", "CD", "CG", "GA", "CM", "TD", "CF"] },
      { name: "LUSO & OTHERS", emoji: "🥁", countries: ["AO", "MZ", "GW", "CV", "ST", "ET", "SO", "ER", "DJ", "MG", "MU", "SC", "KM"] }
    ]
  }
];

// ISO to Flag conversion
function isoToFlag(iso: string): string {
  if (!iso || iso.length !== 2) return '';
  return String.fromCodePoint(iso.charCodeAt(0) - 65 + 0x1F1E6, iso.charCodeAt(1) - 65 + 0x1F1E6);
}

// Country ISO to Name mapping for visited countries
const COUNTRY_ISO_MAP: Record<string, string> = {
  "DE": "Germany", "CH": "Switzerland", "NL": "Netherlands", "AT": "Austria",
  "GB": "United Kingdom", "IE": "Ireland", "SE": "Sweden", "NO": "Norway",
  "DK": "Denmark", "IS": "Iceland", "FR": "France", "BE": "Belgium",
  "ES": "Spain", "PT": "Portugal", "IT": "Italy", "GR": "Greece",
  "CY": "Cyprus", "RO": "Romania", "BG": "Bulgaria", "RS": "Serbia",
  "HR": "Croatia", "SI": "Slovenia", "PL": "Poland", "CZ": "Czechia",
  "SK": "Slovakia", "UA": "Ukraine", "RU": "Russia", "HU": "Hungary",
  "FI": "Finland", "LT": "Lithuania", "LV": "Latvia", "EE": "Estonia",
  "US": "United States", "CA": "Canada", "MX": "Mexico", "BR": "Brazil",
  "AR": "Argentina", "CL": "Chile", "PE": "Peru", "CO": "Colombia",
  "AU": "Australia", "NZ": "New Zealand", "JP": "Japan", "KR": "South Korea",
  "CN": "China", "TW": "Taiwan", "TH": "Thailand", "VN": "Vietnam",
  "SG": "Singapore", "MY": "Malaysia", "ID": "Indonesia", "PH": "Philippines",
  "IN": "India", "NP": "Nepal", "TR": "Turkey", "AE": "UAE",
  "IL": "Israel", "EG": "Egypt", "MA": "Morocco", "ZA": "South Africa",
  "KE": "Kenya", "TZ": "Tanzania"
};

// ISO 3166-1 alpha-3 (3-letter) country codes
const COUNTRY_ISO3_MAP: Record<string, string> = {
  "Germany": "DEU", "Switzerland": "CHE", "Netherlands": "NLD", "Austria": "AUT",
  "United Kingdom": "GBR", "Ireland": "IRL", "Sweden": "SWE", "Norway": "NOR",
  "Denmark": "DNK", "Iceland": "ISL", "France": "FRA", "Belgium": "BEL",
  "Spain": "ESP", "Portugal": "PRT", "Italy": "ITA", "Greece": "GRC",
  "Cyprus": "CYP", "Romania": "ROU", "Bulgaria": "BGR", "Serbia": "SRB",
  "Croatia": "HRV", "Slovenia": "SVN", "Poland": "POL", "Czechia": "CZE",
  "Slovakia": "SVK", "Ukraine": "UKR", "Russia": "RUS", "Hungary": "HUN",
  "Finland": "FIN", "Lithuania": "LTU", "Latvia": "LVA", "Estonia": "EST",
  "United States": "USA", "Canada": "CAN", "Mexico": "MEX", "Brazil": "BRA",
  "Argentina": "ARG", "Chile": "CHL", "Peru": "PER", "Colombia": "COL",
  "Australia": "AUS", "New Zealand": "NZL", "Japan": "JPN", "South Korea": "KOR",
  "China": "CHN", "Taiwan": "TWN", "Thailand": "THA", "Vietnam": "VNM",
  "Singapore": "SGP", "Malaysia": "MYS", "Indonesia": "IDN", "Philippines": "PHL",
  "India": "IND", "Nepal": "NPL", "Turkey": "TUR", "UAE": "ARE",
  "Israel": "ISR", "Egypt": "EGY", "Morocco": "MAR", "South Africa": "ZAF",
  "Kenya": "KEN", "Tanzania": "TZA", "Luxembourg": "LUX", "Monaco": "MCO",
  "Malta": "MLT", "Andorra": "AND", "San Marino": "SMR", "Vatican": "VAT",
  "Liechtenstein": "LIE", "Montenegro": "MNE", "Bosnia": "BIH", "Albania": "ALB",
  "North Macedonia": "MKD", "Kosovo": "XKX", "Moldova": "MDA", "Belarus": "BLR",
  "Georgia": "GEO", "Armenia": "ARM", "Azerbaijan": "AZE", "Kazakhstan": "KAZ",
  "Uzbekistan": "UZB", "Turkmenistan": "TKM", "Tajikistan": "TJK", "Kyrgyzstan": "KGZ",
  "Mongolia": "MNG", "Cambodia": "KHM", "Laos": "LAO", "Myanmar": "MMR",
  "Bangladesh": "BGD", "Sri Lanka": "LKA", "Pakistan": "PAK", "Afghanistan": "AFG",
  "Iran": "IRN", "Iraq": "IRQ", "Syria": "SYR", "Lebanon": "LBN", "Jordan": "JOR",
  "Saudi Arabia": "SAU", "Qatar": "QAT", "Kuwait": "KWT", "Bahrain": "BHR", "Oman": "OMN",
  "Yemen": "YEM", "Tunisia": "TUN", "Algeria": "DZA", "Libya": "LBY", "Sudan": "SDN",
  "Ethiopia": "ETH", "Nigeria": "NGA", "Ghana": "GHA", "Senegal": "SEN", "Ivory Coast": "CIV",
  "Cameroon": "CMR", "Uganda": "UGA", "Rwanda": "RWA", "Botswana": "BWA", "Namibia": "NAM",
  "Zimbabwe": "ZWE", "Zambia": "ZMB", "Mozambique": "MOZ", "Madagascar": "MDG",
  "Cuba": "CUB", "Dominican Republic": "DOM", "Puerto Rico": "PRI", "Jamaica": "JAM",
  "Haiti": "HTI", "Costa Rica": "CRI", "Panama": "PAN", "Guatemala": "GTM",
  "Honduras": "HND", "El Salvador": "SLV", "Nicaragua": "NIC", "Belize": "BLZ",
  "Ecuador": "ECU", "Bolivia": "BOL", "Paraguay": "PRY", "Uruguay": "URY",
  "Venezuela": "VEN", "Guyana": "GUY", "Suriname": "SUR", "Fiji": "FJI",
  "Papua New Guinea": "PNG", "Czech Republic": "CZE"
};

// Globe state
let globeInitialized = false;
let globeScene: THREE.Scene | null = null;
let globeCamera: THREE.PerspectiveCamera | null = null;
let globeRenderer: THREE.WebGLRenderer | null = null;
let globeControls: OrbitControls | null = null;
let animationId: number | null = null;

const views = [
  { id: 'dashboard', label: 'Home', icon: 'house' },
  { id: 'atlas', label: 'Atlas', icon: 'map-trifold' },
  { id: 'themes', label: 'Collections', icon: 'cards' },
  { id: 'analytics', label: 'Stats', icon: 'chart-polar' },
  { id: 'timeline', label: 'Timeline', icon: 'clock-clockwise' }
];

const currentViewTitle = computed(() => {
  const titles: Record<ViewType, string> = {
    dashboard: 'Home',
    atlas: 'Atlas',
    themes: 'Collections',
    analytics: 'Stats',
    timeline: 'Timeline'
  };
  return titles[currentView.value];
});

// Calculate trip durations from travel data - CONSOLIDATED BY CITY
const tripsWithDuration = computed((): TripWithDuration[] => {
  const cityMap: Record<string, { city: string; country: string; countryFlag: string; days: number; dateIn: string; dateOut: string }> = {};

  travelData.trips.forEach(trip => {
    const key = `${trip.city}_${trip.country}`;
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));

    if (!cityMap[key]) {
      cityMap[key] = {
        city: trip.city,
        country: trip.country,
        countryFlag: trip.countryFlag,
        days: 0,
        dateIn: trip.dateIn,
        dateOut: trip.dateOut
      };
    }
    cityMap[key].days += days;
    // Track earliest dateIn and latest dateOut
    if (trip.dateIn < cityMap[key].dateIn) cityMap[key].dateIn = trip.dateIn;
    if (trip.dateOut > cityMap[key].dateOut) cityMap[key].dateOut = trip.dateOut;
  });

  return Object.values(cityMap);
});

// Long stays: more than 6 months (180+ days)
const longStaysOver6Months = computed(() => {
  return tripsWithDuration.value.filter(t => t.days >= 180).sort((a, b) => b.days - a.days);
});

// Medium stays: 1.5-6 months (45-179 days)
const longStays1to6Months = computed(() => {
  return tripsWithDuration.value.filter(t => t.days >= 45 && t.days < 180).sort((a, b) => b.days - a.days);
});

// Short stays: 2 weeks to 5 weeks (14-35 days)
const longStays2WeeksTo1Month = computed(() => {
  return tripsWithDuration.value.filter(t => t.days >= 14 && t.days < 36).sort((a, b) => b.days - a.days);
});

// Stats computed from data - COUNT UNIQUE CITIES
const totalCities = computed(() => new Set(travelData.trips.map(t => `${t.city}_${t.country}`)).size);
const totalCountries = computed(() => new Set(travelData.trips.map(t => t.country)).size);
const totalContinents = computed(() => new Set(travelData.trips.map(t => t.continent)).size);
const totalNomadRegions = computed(() => new Set(travelData.trips.map(t => t.nomadRegion)).size);
const totalDaysAbroad = computed(() => tripsWithDuration.value.reduce((sum, t) => sum + t.days, 0));

// World totals for percentage calculations
const WORLD_COUNTRIES_UN = 195;
const WORLD_NOMAD_REGIONS = 1301;

// Country name to ISO 3-letter code lookup
const countryNameToISO3 = computed(() => {
  const map: Record<string, string> = {};
  for (const [name, iso3] of Object.entries(COUNTRY_ISO3_MAP)) {
    map[name] = iso3;
    map[name.toLowerCase()] = iso3;
  }
  return map;
});

// Country Timeline - grouped by consecutive country stays
const countryTimeline = computed(() => {
  // Sort all trips by dateIn chronologically
  const sortedTrips = [...travelData.trips].sort((a, b) =>
    new Date(a.dateIn).getTime() - new Date(b.dateIn).getTime()
  );

  if (sortedTrips.length === 0) return [];

  // Group consecutive stays in same country
  const timeline: { country: string; iso: string; flag: string; dateIn: string; dateOut: string; days: number }[] = [];
  let current = {
    country: sortedTrips[0].country,
    flag: sortedTrips[0].countryFlag,
    dateIn: sortedTrips[0].dateIn,
    dateOut: sortedTrips[0].dateOut
  };

  for (let i = 1; i < sortedTrips.length; i++) {
    const trip = sortedTrips[i];
    if (trip.country === current.country) {
      // Same country - extend dateOut if later
      if (trip.dateOut > current.dateOut) current.dateOut = trip.dateOut;
      if (trip.dateIn < current.dateIn) current.dateIn = trip.dateIn;
    } else {
      // Different country - save current and start new
      const days = Math.ceil((new Date(current.dateOut).getTime() - new Date(current.dateIn).getTime()) / (1000 * 60 * 60 * 24));
      const iso = countryNameToISO3.value[current.country] || countryNameToISO3.value[current.country.toLowerCase()] || '';
      timeline.push({ ...current, iso, days });
      current = {
        country: trip.country,
        flag: trip.countryFlag,
        dateIn: trip.dateIn,
        dateOut: trip.dateOut
      };
    }
  }
  // Push last entry
  const days = Math.ceil((new Date(current.dateOut).getTime() - new Date(current.dateIn).getTime()) / (1000 * 60 * 60 * 24));
  const iso = countryNameToISO3.value[current.country] || countryNameToISO3.value[current.country.toLowerCase()] || '';
  timeline.push({ ...current, iso, days });

  return timeline;
});

// Format date for timeline display (compact: DD/MM/YY)
const formatTimelineDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getFullYear()).slice(-2)}`;
};

// Cities visited by year and month (heatmap data)
const citiesByYearMonth = computed(() => {
  const data: Record<number, Record<number, Set<string>>> = {};

  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const cityKey = `${trip.city}_${trip.country}`;

    // Mark city for each month it spans
    let current = new Date(dateIn);
    while (current <= dateOut) {
      const year = current.getFullYear();
      const month = current.getMonth() + 1; // 1-12

      if (!data[year]) data[year] = {};
      if (!data[year][month]) data[year][month] = new Set();
      data[year][month].add(cityKey);

      // Move to next month
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
    }
  });

  // Convert to array format with counts
  const years = Object.keys(data).map(Number).sort();
  return years.map(year => ({
    year,
    months: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      count: data[year]?.[i + 1]?.size || 0
    }))
  }));
});

// Countries visited by year and month
const countriesByYearMonth = computed(() => {
  const data: Record<number, Record<number, Set<string>>> = {};

  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);

    // Mark country for each month it spans
    let current = new Date(dateIn);
    while (current <= dateOut) {
      const year = current.getFullYear();
      const month = current.getMonth() + 1; // 1-12

      if (!data[year]) data[year] = {};
      if (!data[year][month]) data[year][month] = new Set();
      data[year][month].add(trip.country);

      // Move to next month
      current.setMonth(current.getMonth() + 1);
      current.setDate(1);
    }
  });

  // Convert to array format with counts
  const years = Object.keys(data).map(Number).sort();
  return years.map(year => ({
    year,
    months: Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      count: data[year]?.[i + 1]?.size || 0
    }))
  }));
});

// Timeline grouped by year ranges for display
const timelineByYearGroups = computed(() => {
  const groups = [
    { label: '2015–2021', entries: [] as typeof countryTimeline.value },
    { label: '2022', entries: [] as typeof countryTimeline.value },
    { label: '2023', entries: [] as typeof countryTimeline.value },
    { label: '2024', entries: [] as typeof countryTimeline.value },
    { label: '2025', entries: [] as typeof countryTimeline.value },
    { label: '2026', entries: [] as typeof countryTimeline.value },
  ];

  countryTimeline.value.forEach(entry => {
    const year = new Date(entry.dateIn).getFullYear();
    if (year <= 2021) {
      groups[0].entries.push(entry);
    } else if (year === 2022) {
      groups[1].entries.push(entry);
    } else if (year === 2023) {
      groups[2].entries.push(entry);
    } else if (year === 2024) {
      groups[3].entries.push(entry);
    } else if (year === 2025) {
      groups[4].entries.push(entry);
    } else {
      groups[5].entries.push(entry);
    }
  });

  return groups;
});

// Timeline unique values for filters
const uniqueContinents = computed(() => [...new Set(travelData.trips.map(t => t.continent))].sort());
const uniqueCountries = computed(() => [...new Set(travelData.trips.map(t => t.country))].sort());
const uniqueRegions = computed(() => [...new Set(travelData.trips.map(t => t.nomadRegion))].sort());

// Get visited country codes from travel data
const visitedCountryCodes = computed(() => {
  const visited = new Set<string>();
  const countryNameToISO: Record<string, string> = {};
  // Reverse mapping
  for (const [iso, name] of Object.entries(COUNTRY_ISO_MAP)) {
    countryNameToISO[name] = iso;
    countryNameToISO[name.toLowerCase()] = iso;
  }
  travelData.trips.forEach(trip => {
    const iso = countryNameToISO[trip.country] || countryNameToISO[trip.country.toLowerCase()];
    if (iso) visited.add(iso);
  });
  return visited;
});

// Cultural regions stats for visited vs not visited table
const culturalRegionsStats = computed(() => {
  const visited = visitedCountryCodes.value;
  return CULTURAL_REGIONS.map(region => {
    const groups = region.groups.map(group => {
      const visitedCount = group.countries.filter(iso => visited.has(iso)).length;
      const totalCount = group.countries.length;
      const percentage = totalCount > 0 ? Math.round((visitedCount / totalCount) * 100) : 0;
      return {
        name: group.name,
        emoji: group.emoji,
        visited: visitedCount,
        total: totalCount,
        percentage,
        flags: group.countries.filter(iso => visited.has(iso)).map(iso => isoToFlag(iso)).join(' ')
      };
    });
    const regionVisited = groups.reduce((sum, g) => sum + g.visited, 0);
    const regionTotal = groups.reduce((sum, g) => sum + g.total, 0);
    return {
      region: region.region,
      emoji: region.emoji,
      groups,
      visited: regionVisited,
      total: regionTotal,
      percentage: regionTotal > 0 ? Math.round((regionVisited / regionTotal) * 100) : 0
    };
  });
});

// Timeline stats
const timelineStats = computed(() => {
  const filtered = filteredTimeline.value;
  return {
    totalContinents: new Set(filtered.map(t => t.continent)).size,
    totalCountries: new Set(filtered.map(t => t.country)).size,
    totalRegions: new Set(filtered.map(t => t.nomadRegion)).size,
    totalCities: new Set(filtered.map(t => t.city)).size
  };
});

// Timeline with days calculated
const timelineWithDays = computed(() => {
  return travelData.trips.map(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    return { ...trip, days };
  });
});

// Filtered and sorted timeline
const filteredTimeline = computed(() => {
  let result = [...timelineWithDays.value];

  if (timelineFilter.value.continent) {
    result = result.filter(t => t.continent === timelineFilter.value.continent);
  }
  if (timelineFilter.value.country) {
    result = result.filter(t => t.country === timelineFilter.value.country);
  }
  if (timelineFilter.value.region) {
    result = result.filter(t => t.nomadRegion === timelineFilter.value.region);
  }

  const field = timelineSort.value.field;
  const asc = timelineSort.value.asc;

  result.sort((a, b) => {
    let valA = (a as any)[field];
    let valB = (b as any)[field];
    if (field === 'dateIn') {
      valA = new Date(valA).getTime();
      valB = new Date(valB).getTime();
    }
    if (typeof valA === 'string') {
      return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return asc ? valA - valB : valB - valA;
  });

  return result;
});

const sortTimeline = (field: string) => {
  if (timelineSort.value.field === field) {
    timelineSort.value.asc = !timelineSort.value.asc;
  } else {
    timelineSort.value.field = field;
    timelineSort.value.asc = true;
  }
};

const sortIcon = (field: string) => {
  if (timelineSort.value.field !== field) return 'ph ph-caret-up-down';
  return timelineSort.value.asc ? 'ph ph-caret-up' : 'ph ph-caret-down';
};

const resetFilters = () => {
  timelineFilter.value = { continent: '', country: '', region: '' };
};

let clockCleanup: (() => void) | null = null;
let charts: Record<string, Chart> = {};

onMounted(async () => {
  DB.value = initData();

  // Scale to FILL screen: width-based scale, height fills screen
  const DESIGN_W = 1280;

  const scaleToFill = () => {
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const appContainer = document.querySelector('.app-container') as HTMLElement;
    if (!appContainer) return;

    // Scale based on width to fill horizontally
    const scale = screenW / DESIGN_W;
    // Calculate height needed to fill screen (in design pixels)
    const designH = screenH / scale;

    console.log('[MyTrips] Scale to FILL:', {
      screen: `${screenW}x${screenH}`,
      scale: scale.toFixed(3),
      designSize: `${DESIGN_W}x${Math.round(designH)}`
    });

    appContainer.style.transform = `scale(${scale})`;
    appContainer.style.transformOrigin = 'top left';
    appContainer.style.width = `${DESIGN_W}px`;
    appContainer.style.height = `${designH}px`;
  };

  scaleToFill();
  window.addEventListener('resize', scaleToFill);

  // Start clock
  const interval = setInterval(() => {
    const now = new Date();
    currentTime.value = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
  }, 1000);
  clockCleanup = () => clearInterval(interval);

  // Initialize globe on dashboard
  await nextTick();
  initGlobe();
});

onUnmounted(() => {
  if (clockCleanup) clockCleanup();
  Object.values(charts).forEach(chart => chart.destroy());
  if (animationId) cancelAnimationFrame(animationId);
  if (globeRenderer) globeRenderer.dispose();
});

watch(currentView, async (newView, oldView) => {
  console.log(`[MyTrips] View change: ${oldView} -> ${newView}`);

  // Cleanup globe when leaving dashboard
  if (oldView === 'dashboard' && newView !== 'dashboard') {
    console.log('[MyTrips] Cleaning up globe...');
    if (animationId) cancelAnimationFrame(animationId);
    if (globeRenderer) {
      globeRenderer.dispose();
      globeRenderer = null;
    }
    globeScene = null;
    globeCamera = null;
    globeControls = null;
    globeInitialized = false;
    console.log('[MyTrips] Globe cleanup complete');
  }

  // Cleanup atlas when leaving atlas view
  if (oldView === 'atlas' && newView !== 'atlas') {
    console.log('[MyTrips] Cleaning up atlas...');
    if (atlasMap) {
      atlasMap.remove();
      atlasMap = null;
    }
    console.log('[MyTrips] Atlas cleanup complete');
  }

  if (currentView.value === 'analytics') {
    console.log('[MyTrips] Initializing charts...');
    await nextTick();
    initCharts();
  }
  if (currentView.value === 'dashboard') {
    console.log('[MyTrips] Initializing globe...');
    await nextTick();
    initGlobe();
  }
  if (currentView.value === 'atlas') {
    console.log('[MyTrips] Initializing atlas...');
    await nextTick();
    initAtlasMap();
  }
});

// Globe initialization
function initGlobe() {
  console.log('[MyTrips] initGlobe called', { hasContainer: !!globeContainer.value, globeInitialized });
  if (!globeContainer.value || globeInitialized) {
    console.log('[MyTrips] initGlobe skipped - already initialized or no container');
    return;
  }

  const container = globeContainer.value;
  console.log('[MyTrips] Globe container size:', container.clientWidth, 'x', container.clientHeight);

  // Wait for container to have dimensions
  if (container.clientWidth === 0 || container.clientHeight === 0) {
    console.log('[MyTrips] Globe container has no size, retrying in 100ms');
    setTimeout(initGlobe, 100);
    return;
  }

  console.log('[MyTrips] Creating globe...');
  globeInitialized = true;
  const CONFIG = { radius: 10, dotSize: 0.08, dotDensity: 1.5 };

  const REGION_COLORS: Record<string, number> = {
    'North America': 0xE74C3C,
    'South America': 0x2ECC71,
    'Europe': 0x3498DB,
    'Africa': 0xF39C12,
    'Asia': 0x9B59B6,
    'Oceania': 0x1ABC9C
  };

  const COUNTRIES = [
    { name: 'USA', region: 'North America', points: [[-125,49],[-117,49],[-104,49],[-95,49],[-85,46],[-75,45],[-67,45],[-70,41],[-75,38],[-76,34],[-81,25],[-88,30],[-97,26],[-104,29],[-114,32],[-120,34],[-125,46]] },
    { name: 'Canada', region: 'North America', points: [[-141,70],[-120,75],[-85,73],[-65,60],[-55,52],[-67,45],[-82,45],[-95,49],[-120,49],[-135,60],[-141,60]] },
    { name: 'Mexico', region: 'North America', points: [[-117,32],[-106,32],[-100,28],[-97,22],[-93,18],[-87,21],[-92,15],[-105,20],[-114,28]] },
    { name: 'Brazil', region: 'South America', points: [[-74,4],[-60,0],[-50,2],[-35,-6],[-37,-14],[-45,-24],[-55,-32],[-58,-20],[-65,-10],[-74,0]] },
    { name: 'Argentina', region: 'South America', points: [[-70,-22],[-58,-27],[-57,-30],[-65,-42],[-68,-55],[-73,-48],[-70,-35],[-68,-25]] },
    { name: 'Colombia', region: 'South America', points: [[-78,9],[-71,12],[-67,4],[-70,-2],[-78,3]] },
    { name: 'Peru', region: 'South America', points: [[-81,-5],[-75,-2],[-70,-10],[-70,-18],[-78,-12]] },
    { name: 'Chile', region: 'South America', points: [[-70,-18],[-70,-27],[-73,-42],[-72,-55],[-68,-52],[-70,-35]] },
    { name: 'UK', region: 'Europe', points: [[-6,58],[0,57],[1,52],[-3,50],[-6,54]] },
    { name: 'France', region: 'Europe', points: [[-2,48],[5,51],[8,46],[3,42],[-2,45]] },
    { name: 'Germany', region: 'Europe', points: [[6,55],[14,54],[15,50],[12,47],[6,49]] },
    { name: 'Spain', region: 'Europe', points: [[-9,44],[0,42],[3,40],[-6,36],[-9,40]] },
    { name: 'Italy', region: 'Europe', points: [[7,47],[14,46],[18,40],[13,38],[8,44]] },
    { name: 'Poland', region: 'Europe', points: [[14,54],[23,54],[24,50],[16,50]] },
    { name: 'Portugal', region: 'Europe', points: [[-9,42],[-7,39],[-9,37]] },
    { name: 'Netherlands', region: 'Europe', points: [[3,54],[7,52],[4,51]] },
    { name: 'Greece', region: 'Europe', points: [[20,42],[26,41],[24,37],[20,39]] },
    { name: 'Sweden', region: 'Europe', points: [[12,66],[22,68],[22,63],[13,56],[12,62]] },
    { name: 'China', region: 'Asia', points: [[75,40],[100,50],[125,45],[122,35],[110,22],[92,28],[75,35]] },
    { name: 'India', region: 'Asia', points: [[68,35],[85,28],[88,22],[77,8],[68,23]] },
    { name: 'Japan', region: 'Asia', points: [[130,45],[145,44],[140,35],[130,35]] },
    { name: 'Thailand', region: 'Asia', points: [[98,20],[105,13],[100,7],[97,17]] },
    { name: 'Vietnam', region: 'Asia', points: [[103,23],[109,16],[106,10],[105,20]] },
    { name: 'Indonesia', region: 'Asia', points: [[95,6],[120,2],[140,-5],[135,-8],[105,-7],[95,2]] },
    { name: 'Turkey', region: 'Asia', points: [[26,42],[44,40],[40,36],[26,37]] },
    { name: 'UAE', region: 'Asia', points: [[51,26],[56,23],[51,24]] },
    { name: 'Australia', region: 'Oceania', points: [[114,-20],[140,-12],[154,-26],[150,-38],[130,-34],[114,-26]] },
    { name: 'New Zealand', region: 'Oceania', points: [[172,-34],[178,-42],[172,-38]] },
    { name: 'South Africa', region: 'Africa', points: [[17,-22],[32,-24],[30,-33],[17,-32]] },
    { name: 'Morocco', region: 'Africa', points: [[-13,36],[-1,32],[-13,28]] },
    { name: 'Egypt', region: 'Africa', points: [[25,32],[36,30],[35,22],[25,22]] },
    { name: 'Kenya', region: 'Africa', points: [[34,5],[42,0],[34,-1]] }
  ];

  globeScene = new THREE.Scene();
  globeScene.background = new THREE.Color(0x020617);

  globeCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  globeCamera.position.set(0, 5, 30);

  globeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  globeRenderer.setSize(container.clientWidth, container.clientHeight);
  globeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(globeRenderer.domElement);

  globeControls = new OrbitControls(globeCamera, globeRenderer.domElement);
  globeControls.enableDamping = true;
  globeControls.dampingFactor = 0.05;
  globeControls.rotateSpeed = 0.5;
  globeControls.autoRotate = true;
  globeControls.autoRotateSpeed = 0.5;
  globeControls.minDistance = 18;
  globeControls.maxDistance = 50;
  globeControls.enablePan = false;

  function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      (radius * Math.cos(phi)),
      (radius * Math.sin(phi) * Math.sin(theta))
    );
  }

  function isPointInPolygon(x: number, y: number, polygon: number[][]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0], yi = polygon[i][1];
      const xj = polygon[j][0], yj = polygon[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }

  // Black core
  const coreGeometry = new THREE.SphereGeometry(CONFIG.radius - 0.05, 64, 64);
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x0a0a0f });
  globeScene.add(new THREE.Mesh(coreGeometry, coreMaterial));

  // Country dots
  const allPositions: number[] = [];
  const allColors: number[] = [];

  for (const country of COUNTRIES) {
    const color = new THREE.Color(REGION_COLORS[country.region] || 0x3498DB);
    let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
    for (const [lon, lat] of country.points) {
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      minLon = Math.min(minLon, lon);
      maxLon = Math.max(maxLon, lon);
    }
    const latStep = 1.2 / CONFIG.dotDensity;
    const lonStep = 1.2 / CONFIG.dotDensity;
    for (let lat = minLat; lat <= maxLat; lat += latStep) {
      const adjustedLonStep = lonStep / Math.max(Math.cos(lat * Math.PI / 180), 0.1);
      for (let lon = minLon; lon <= maxLon; lon += adjustedLonStep) {
        if (isPointInPolygon(lon, lat, country.points)) {
          const pos = latLonToVector3(lat, lon, CONFIG.radius);
          allPositions.push(pos.x, pos.y, pos.z);
          const v = 0.9 + Math.random() * 0.2;
          allColors.push(Math.min(color.r * v, 1), Math.min(color.g * v, 1), Math.min(color.b * v, 1));
        }
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(allColors, 3));
  const material = new THREE.PointsMaterial({
    size: CONFIG.dotSize,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });
  globeScene.add(new THREE.Points(geometry, material));

  // Grid lines
  const gridMaterial = new THREE.LineBasicMaterial({ color: 0x1a1a2e, transparent: true, opacity: 0.3 });
  for (let lat = -60; lat <= 60; lat += 30) {
    const points: THREE.Vector3[] = [];
    const phi = (90 - lat) * (Math.PI / 180);
    for (let lon = 0; lon <= 360; lon += 5) {
      const theta = lon * (Math.PI / 180);
      points.push(new THREE.Vector3(
        CONFIG.radius * Math.sin(phi) * Math.cos(theta),
        CONFIG.radius * Math.cos(phi),
        CONFIG.radius * Math.sin(phi) * Math.sin(theta)
      ));
    }
    globeScene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), gridMaterial));
  }

  // Atmosphere glow
  const atmGeometry = new THREE.SphereGeometry(CONFIG.radius + 1.5, 64, 64);
  const atmMaterial = new THREE.ShaderMaterial({
    uniforms: { glowColor: { value: new THREE.Color(0x06b6d4) } },
    vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform vec3 glowColor; varying vec3 vNormal; void main() { float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0); gl_FragColor = vec4(glowColor, 1.0) * intensity * 0.6; }`,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  globeScene.add(new THREE.Mesh(atmGeometry, atmMaterial));

  // Stars
  const starPositions: number[] = [];
  for (let i = 0; i < 500; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200;
    if (Math.sqrt(x * x + y * y + z * z) > 50) starPositions.push(x, y, z);
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  globeScene.add(new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, transparent: true, opacity: 0.6 })));

  // Animation loop
  function animate() {
    animationId = requestAnimationFrame(animate);
    if (globeControls) globeControls.update();
    if (globeRenderer && globeScene && globeCamera) {
      globeRenderer.render(globeScene, globeCamera);
    }
  }
  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    if (!globeCamera || !globeRenderer || !container) return;
    globeCamera.aspect = container.clientWidth / container.clientHeight;
    globeCamera.updateProjectionMatrix();
    globeRenderer.setSize(container.clientWidth, container.clientHeight);
  });
}

// Atlas Map initialization
function initAtlasMap() {
  console.log('[MyTrips] initAtlasMap called', { hasContainer: !!atlasMapContainer.value, hasAtlasMap: !!atlasMap });
  if (!atlasMapContainer.value || atlasMap) {
    console.log('[MyTrips] initAtlasMap skipped - already initialized or no container');
    return;
  }

  const container = atlasMapContainer.value;
  console.log('[MyTrips] Atlas container size:', container.clientWidth, 'x', container.clientHeight);

  if (container.clientWidth === 0 || container.clientHeight === 0) {
    console.log('[MyTrips] Atlas container has no size, retrying in 100ms');
    setTimeout(initAtlasMap, 100);
    return;
  }

  console.log('[MyTrips] Creating atlas map...');
  atlasMap = L.map(container, {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(atlasMap);

  // Set default mode
  setMapMode('pin');
}

// Set map visualization mode (Pins, Countries, Religions)
async function setMapMode(mode: string) {
  if (!atlasMap) return;
  currentMapMode.value = mode;

  // Clear existing layers (except tile layer)
  atlasMap.eachLayer((layer: any) => {
    if (layer._url === undefined) { // Not a tile layer
      atlasMap.removeLayer(layer);
    }
  });

  showMapLegend.value = false;

  if (mode === 'pin') {
    // Add pin markers for each trip
    travelData.trips.forEach(trip => {
      const marker = L.circleMarker([trip.lat, trip.lng], {
        radius: 4,
        fillColor: '#06b6d4',
        color: 'transparent',
        fillOpacity: 0.8
      }).addTo(atlasMap);

      marker.bindPopup(`
        <b style="color:#06b6d4">${trip.city}</b><br>
        <span style="color:#cbd5e1">${trip.country} - ${trip.dateIn}</span>
      `);
    });
  } else if (mode === 'region') {
    // NomadMania Regions mode - color by region
    const regionColors: Record<string, string> = {};
    const regions = [...new Set(travelData.trips.map(t => t.nomadRegion))];
    const colorPalette = [
      '#06b6d4', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899',
      '#3b82f6', '#14b8a6', '#f43f5e', '#84cc16', '#6366f1',
      '#22c55e', '#eab308', '#0ea5e9', '#a855f7', '#ef4444'
    ];
    regions.forEach((region, i) => {
      regionColors[region] = colorPalette[i % colorPalette.length];
    });

    travelData.trips.forEach(trip => {
      const marker = L.circleMarker([trip.lat, trip.lng], {
        radius: 6,
        fillColor: regionColors[trip.nomadRegion] || '#06b6d4',
        color: '#0b0f19',
        weight: 1,
        fillOpacity: 0.9
      }).addTo(atlasMap);

      marker.bindPopup(`
        <b style="color:${regionColors[trip.nomadRegion]}">${trip.city}</b><br>
        <span style="color:#cbd5e1">${trip.nomadRegion}</span><br>
        <span style="color:#64748b">${trip.country}</span>
      `);
    });

    showMapLegend.value = true;
    mapLegendContent.value = `<div style="font-size:10px;color:#94a3b8;margin-bottom:4px">NomadMania Regions (${regions.length})</div>` +
      regions.slice(0, 12).map(r =>
        `<div style="display:flex;gap:6px;align-items:center;margin-top:2px"><div style="width:10px;height:10px;background:${regionColors[r]};border-radius:2px"></div><span style="font-size:11px">${r}</span></div>`
      ).join('') + (regions.length > 12 ? `<div style="margin-top:4px;font-size:10px;color:#64748b">+${regions.length - 12} more...</div>` : '');
  } else {
    // Load GeoJSON for country/religion modes
    try {
      const res = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json');
      const data = await res.json();

      L.geoJSON(data, {
        style: (feature: any) => {
          let col = '#1e293b';
          if (mode === 'country' && feature.properties.name.length % 2 === 0) {
            col = '#06b6d4';
          }
          if (mode === 'rel') {
            const code = feature.properties.name.charCodeAt(0);
            if (code % 3 === 0) col = '#3b82f6';
            else if (code % 3 === 1) col = '#10b981';
            else col = '#f59e0b';
          }
          return { fillColor: col, weight: 1, color: '#0b0f19', fillOpacity: 0.7 };
        }
      }).addTo(atlasMap);

      showMapLegend.value = true;
      mapLegendContent.value = mode === 'country'
        ? '<div style="display:flex;gap:8px;align-items:center"><div style="width:12px;height:12px;background:#06b6d4;border-radius:2px"></div> Visited</div>'
        : '<div style="display:flex;gap:8px;align-items:center"><div style="width:12px;height:12px;background:#3b82f6;border-radius:2px"></div> Group A</div><div style="display:flex;gap:8px;align-items:center;margin-top:4px"><div style="width:12px;height:12px;background:#10b981;border-radius:2px"></div> Group B</div><div style="display:flex;gap:8px;align-items:center;margin-top:4px"><div style="width:12px;height:12px;background:#f59e0b;border-radius:2px"></div> Group C</div>';
    } catch (e: unknown) {
      console.error('Failed to load GeoJSON:', e);
    }
  }
}

// Theme/Collections functions
function openTheme(theme: any) {
  selectedTheme.value = theme;
  currentSlide.value = 0;

  // Setup slideshow images
  slideshowImages.value = [
    `https://loremflickr.com/1920/1080/${theme.img.split(',')[0]}/all`,
    'https://loremflickr.com/1920/1080/travel/all',
    'https://loremflickr.com/1920/1080/landscape/all'
  ];

  // Start slideshow
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slideshowImages.value.length;
  }, 4000);

  // Show overlay with animation
  setTimeout(() => {
    themeOverlayVisible.value = true;
  }, 10);

  // Initialize theme map
  setTimeout(() => {
    initThemeMap(theme);
  }, 300);
}

function closeTheme() {
  themeOverlayVisible.value = false;
  if (slideInterval) clearInterval(slideInterval);

  setTimeout(() => {
    selectedTheme.value = null;
    if (themeMap) {
      themeMap.remove();
      themeMap = null;
    }
  }, 500);
}

function initThemeMap(theme: any) {
  if (!themeMapContainer.value) return;

  if (themeMap) {
    themeMap.remove();
    themeMap = null;
  }

  themeMap = L.map(themeMapContainer.value, { zoomControl: false }).setView([20, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd'
  }).addTo(themeMap);

  // Add markers for cities in this theme
  const themeCities = DB.value.filter(c => theme.query.includes(c.name));
  themeCities.forEach(city => {
    L.circleMarker([city.lat, city.lng], {
      radius: 5,
      fillColor: '#fff',
      color: '#06b6d4',
      weight: 2,
      fillOpacity: 1
    }).addTo(themeMap);
  });
}

// Computed: Trips by year (for velocity chart)
const tripsByYear = computed(() => {
  const years: Record<number, number> = {};
  travelData.trips.forEach(trip => {
    const year = new Date(trip.dateIn).getFullYear();
    years[year] = (years[year] || 0) + 1;
  });
  return years;
});

// Computed: Trips by continent (for pie chart)
const tripsByContinent = computed(() => {
  const continents: Record<string, number> = {};
  travelData.trips.forEach(trip => {
    continents[trip.continent] = (continents[trip.continent] || 0) + 1;
  });
  return continents;
});

// Continent colors mapping
const continentColors: Record<string, string> = {
  'Europe': '#60a5fa',
  'Asia': '#f59e0b',
  'South America': '#f472b6',
  'North America': '#34d399',
  'Africa': '#a78bfa',
  'Oceania': '#22d3ee'
};

// ============================================
// ADDITIONAL COMPUTED STATS - ALL FROM DATA
// ============================================

// Language family mapping
const LANGUAGE_FAMILIES: Record<string, { family: string; branch: string; icon: string }> = {
  // Indo-European > Romance
  'Portuguese': { family: 'Indo-European', branch: 'Romance', icon: '🇵🇹' },
  'Spanish': { family: 'Indo-European', branch: 'Romance', icon: '🇪🇸' },
  'French': { family: 'Indo-European', branch: 'Romance', icon: '🇫🇷' },
  'Italian': { family: 'Indo-European', branch: 'Romance', icon: '🇮🇹' },
  'Catalan': { family: 'Indo-European', branch: 'Romance', icon: '🏴' },
  'Romanian': { family: 'Indo-European', branch: 'Romance', icon: '🇷🇴' },
  // Indo-European > Germanic
  'English': { family: 'Indo-European', branch: 'Germanic', icon: '🇬🇧' },
  'German': { family: 'Indo-European', branch: 'Germanic', icon: '🇩🇪' },
  'Dutch': { family: 'Indo-European', branch: 'Germanic', icon: '🇳🇱' },
  'Swedish': { family: 'Indo-European', branch: 'Germanic', icon: '🇸🇪' },
  'Norwegian': { family: 'Indo-European', branch: 'Germanic', icon: '🇳🇴' },
  'Danish': { family: 'Indo-European', branch: 'Germanic', icon: '🇩🇰' },
  'Icelandic': { family: 'Indo-European', branch: 'Germanic', icon: '🇮🇸' },
  // Indo-European > Slavic
  'Russian': { family: 'Indo-European', branch: 'Slavic', icon: '🇷🇺' },
  'Polish': { family: 'Indo-European', branch: 'Slavic', icon: '🇵🇱' },
  'Czech': { family: 'Indo-European', branch: 'Slavic', icon: '🇨🇿' },
  'Slovak': { family: 'Indo-European', branch: 'Slavic', icon: '🇸🇰' },
  'Ukrainian': { family: 'Indo-European', branch: 'Slavic', icon: '🇺🇦' },
  'Bulgarian': { family: 'Indo-European', branch: 'Slavic', icon: '🇧🇬' },
  'Serbian': { family: 'Indo-European', branch: 'Slavic', icon: '🇷🇸' },
  'Croatian': { family: 'Indo-European', branch: 'Slavic', icon: '🇭🇷' },
  'Slovenian': { family: 'Indo-European', branch: 'Slavic', icon: '🇸🇮' },
  'Bosnian': { family: 'Indo-European', branch: 'Slavic', icon: '🇧🇦' },
  'Macedonian': { family: 'Indo-European', branch: 'Slavic', icon: '🇲🇰' },
  // Indo-European > Baltic
  'Lithuanian': { family: 'Indo-European', branch: 'Baltic', icon: '🇱🇹' },
  'Latvian': { family: 'Indo-European', branch: 'Baltic', icon: '🇱🇻' },
  // Indo-European > Celtic
  'Irish': { family: 'Indo-European', branch: 'Celtic', icon: '🇮🇪' },
  'Welsh': { family: 'Indo-European', branch: 'Celtic', icon: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  // Indo-European > Greek
  'Greek': { family: 'Indo-European', branch: 'Hellenic', icon: '🇬🇷' },
  // Indo-European > Albanian
  'Albanian': { family: 'Indo-European', branch: 'Albanian', icon: '🇦🇱' },
  // Indo-European > Indo-Iranian
  'Hindi': { family: 'Indo-European', branch: 'Indo-Iranian', icon: '🇮🇳' },
  'Persian': { family: 'Indo-European', branch: 'Indo-Iranian', icon: '🇮🇷' },
  'Urdu': { family: 'Indo-European', branch: 'Indo-Iranian', icon: '🇵🇰' },
  'Bengali': { family: 'Indo-European', branch: 'Indo-Iranian', icon: '🇧🇩' },
  'Nepali': { family: 'Indo-European', branch: 'Indo-Iranian', icon: '🇳🇵' },
  'Sinhala': { family: 'Indo-European', branch: 'Indo-Iranian', icon: '🇱🇰' },
  // Afro-Asiatic > Semitic
  'Arabic': { family: 'Afro-Asiatic', branch: 'Semitic', icon: '🇸🇦' },
  'Hebrew': { family: 'Afro-Asiatic', branch: 'Semitic', icon: '🇮🇱' },
  'Maltese': { family: 'Afro-Asiatic', branch: 'Semitic', icon: '🇲🇹' },
  'Amharic': { family: 'Afro-Asiatic', branch: 'Semitic', icon: '🇪🇹' },
  // Uralic
  'Finnish': { family: 'Uralic', branch: 'Finnic', icon: '🇫🇮' },
  'Estonian': { family: 'Uralic', branch: 'Finnic', icon: '🇪🇪' },
  'Hungarian': { family: 'Uralic', branch: 'Ugric', icon: '🇭🇺' },
  // Turkic
  'Turkish': { family: 'Turkic', branch: 'Oghuz', icon: '🇹🇷' },
  'Azerbaijani': { family: 'Turkic', branch: 'Oghuz', icon: '🇦🇿' },
  'Kazakh': { family: 'Turkic', branch: 'Kipchak', icon: '🇰🇿' },
  'Uzbek': { family: 'Turkic', branch: 'Karluk', icon: '🇺🇿' },
  // Kartvelian
  'Georgian': { family: 'Kartvelian', branch: 'Kartvelian', icon: '🇬🇪' },
  // Sino-Tibetan
  'Mandarin': { family: 'Sino-Tibetan', branch: 'Sinitic', icon: '🇨🇳' },
  'Cantonese': { family: 'Sino-Tibetan', branch: 'Sinitic', icon: '🇭🇰' },
  'Burmese': { family: 'Sino-Tibetan', branch: 'Tibeto-Burman', icon: '🇲🇲' },
  // Japonic
  'Japanese': { family: 'Japonic', branch: 'Japonic', icon: '🇯🇵' },
  // Koreanic
  'Korean': { family: 'Koreanic', branch: 'Koreanic', icon: '🇰🇷' },
  // Tai-Kadai
  'Thai': { family: 'Tai-Kadai', branch: 'Tai', icon: '🇹🇭' },
  'Lao': { family: 'Tai-Kadai', branch: 'Tai', icon: '🇱🇦' },
  // Austroasiatic
  'Vietnamese': { family: 'Austroasiatic', branch: 'Vietic', icon: '🇻🇳' },
  'Khmer': { family: 'Austroasiatic', branch: 'Khmer', icon: '🇰🇭' },
  // Austronesian
  'Indonesian': { family: 'Austronesian', branch: 'Malayo-Polynesian', icon: '🇮🇩' },
  'Malay': { family: 'Austronesian', branch: 'Malayo-Polynesian', icon: '🇲🇾' },
  'Filipino': { family: 'Austronesian', branch: 'Malayo-Polynesian', icon: '🇵🇭' },
  // Niger-Congo
  'Swahili': { family: 'Niger-Congo', branch: 'Bantu', icon: '🇰🇪' },
};

// Stats by language with family grouping
const languageStats = computed(() => {
  const langs: Record<string, { count: number; days: number; countries: Set<string> }> = {};
  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    if (!langs[trip.language]) {
      langs[trip.language] = { count: 0, days: 0, countries: new Set() };
    }
    langs[trip.language].count++;
    langs[trip.language].days += days;
    langs[trip.language].countries.add(trip.country);
  });
  return Object.entries(langs)
    .map(([lang, data]) => ({
      language: lang,
      cities: data.count,
      days: data.days,
      countries: data.countries.size
    }))
    .sort((a, b) => b.days - a.days);
});

// Languages grouped by family tree
const languagesByFamily = computed(() => {
  const families: Record<string, {
    totalDays: number;
    branches: Record<string, {
      totalDays: number;
      languages: Array<{ language: string; days: number; cities: number; countries: number; icon: string }>
    }>
  }> = {};

  languageStats.value.forEach(lang => {
    const info = LANGUAGE_FAMILIES[lang.language] || { family: 'Other', branch: 'Other', icon: '🌍' };

    if (!families[info.family]) {
      families[info.family] = { totalDays: 0, branches: {} };
    }
    if (!families[info.family].branches[info.branch]) {
      families[info.family].branches[info.branch] = { totalDays: 0, languages: [] };
    }

    families[info.family].totalDays += lang.days;
    families[info.family].branches[info.branch].totalDays += lang.days;
    families[info.family].branches[info.branch].languages.push({
      language: lang.language,
      days: lang.days,
      cities: lang.cities,
      countries: lang.countries,
      icon: info.icon
    });
  });

  // Sort and convert to array
  return Object.entries(families)
    .map(([family, data]) => ({
      family,
      totalDays: data.totalDays,
      branches: Object.entries(data.branches)
        .map(([branch, branchData]) => ({
          branch,
          totalDays: branchData.totalDays,
          languages: branchData.languages.sort((a, b) => b.days - a.days)
        }))
        .sort((a, b) => b.totalDays - a.totalDays)
    }))
    .sort((a, b) => b.totalDays - a.totalDays);
});

// Stats by culture
const cultureStats = computed(() => {
  const cultures: Record<string, { count: number; days: number; countries: Set<string> }> = {};
  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    if (!cultures[trip.culture]) {
      cultures[trip.culture] = { count: 0, days: 0, countries: new Set() };
    }
    cultures[trip.culture].count++;
    cultures[trip.culture].days += days;
    cultures[trip.culture].countries.add(trip.country);
  });
  return Object.entries(cultures)
    .map(([culture, data]) => ({
      culture,
      cities: data.count,
      days: data.days,
      countries: data.countries.size
    }))
    .sort((a, b) => b.days - a.days);
});

// Stats by nomad region - COUNT UNIQUE CITIES, NOT VISITS
const nomadRegionStats = computed(() => {
  const regions: Record<string, { cities: Set<string>; days: number; countries: Set<string> }> = {};
  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    if (!regions[trip.nomadRegion]) {
      regions[trip.nomadRegion] = { cities: new Set(), days: 0, countries: new Set() };
    }
    regions[trip.nomadRegion].cities.add(`${trip.city}_${trip.country}`);
    regions[trip.nomadRegion].days += days;
    regions[trip.nomadRegion].countries.add(trip.country);
  });
  return Object.entries(regions)
    .map(([region, data]) => ({
      region,
      cities: data.cities.size,
      days: data.days,
      countries: data.countries.size
    }))
    .sort((a, b) => b.days - a.days);
});

// Island destinations (detect from city/region names) - UNIQUE CITIES
const islandKeywords = ['Island', 'Ilh', 'Baleares', 'Canarias', 'Noronha', 'Florianópolis', 'Ibiza', 'Mallorca', 'Tenerife', 'Palmas', 'Madeira', 'Açores', 'Azores', 'Sardinia', 'Sicily', 'Corsica', 'Crete', 'Santorini', 'Bali', 'Phuket', 'Zanzibar', 'Malta', 'Cyprus'];
const islandDestinations = computed(() => {
  const seen = new Set<string>();
  return travelData.trips.filter(trip => {
    const key = `${trip.city}_${trip.country}`;
    if (seen.has(key)) return false;
    const isIsland = islandKeywords.some(kw =>
      trip.city.toLowerCase().includes(kw.toLowerCase()) ||
      trip.state.toLowerCase().includes(kw.toLowerCase()) ||
      trip.nomadRegion.toLowerCase().includes(kw.toLowerCase())
    );
    if (isIsland) seen.add(key);
    return isIsland;
  });
});

// Coastal destinations (cities by the sea) - UNIQUE CITIES
const coastalKeywords = ['Beach', 'Porto', 'Port', 'Mar', 'Costa', 'Bay', 'Coastal', 'Santos', 'Búzios', 'Paraty', 'Ubatuba', 'Cádiz', 'Alicante', 'Valencia', 'Barcelona', 'Nice', 'Monaco', 'Lisbon', 'Rio', 'Salvador', 'Recife', 'Fortaleza', 'Natal', 'Pipa', 'Jericoacoara'];
const coastalDestinations = computed(() => {
  const seen = new Set<string>();
  const islandKeys = new Set(islandDestinations.value.map(t => `${t.city}_${t.country}`));
  return travelData.trips.filter(trip => {
    const key = `${trip.city}_${trip.country}`;
    if (seen.has(key)) return false;
    const isCoastal = coastalKeywords.some(kw =>
      trip.city.toLowerCase().includes(kw.toLowerCase()) ||
      trip.state.toLowerCase().includes(kw.toLowerCase())
    ) || islandKeys.has(key);
    if (isCoastal) seen.add(key);
    return isCoastal;
  });
});

// Capital cities visited - UNIQUE CITIES
const capitalCities = computed(() => {
  const seen = new Set<string>();
  return travelData.trips.filter(trip => {
    const key = `${trip.city}_${trip.country}`;
    if (seen.has(key)) return false;
    const capitalLat = trip.countryCapital?.lat;
    const capitalLng = trip.countryCapital?.lng;
    if (!capitalLat || !capitalLng) return false;
    const latDiff = Math.abs(trip.lat - capitalLat);
    const lngDiff = Math.abs(trip.lng - capitalLng);
    const isCapital = latDiff < 0.5 && lngDiff < 0.5;
    if (isCapital) seen.add(key);
    return isCapital;
  });
});

// Days spent by continent
const daysByContinent = computed(() => {
  const continents: Record<string, number> = {};
  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    continents[trip.continent] = (continents[trip.continent] || 0) + days;
  });
  return Object.entries(continents)
    .map(([continent, days]) => ({ continent, days }))
    .sort((a, b) => b.days - a.days);
});

// Countries by time spent - ALL countries (not limited to 10)
const allCountriesByTime = computed(() => {
  const countries: Record<string, { days: number; flag: string }> = {};
  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    if (!countries[trip.country]) {
      countries[trip.country] = { days: 0, flag: trip.countryFlag };
    }
    countries[trip.country].days += days;
  });
  return Object.entries(countries)
    .map(([country, data]) => ({ country, ...data }))
    .sort((a, b) => b.days - a.days);
});

// Countries by time: 1+ year (365+ days)
const countriesByTimeOver1Year = computed(() => {
  return allCountriesByTime.value.filter(c => c.days >= 365);
});

// Countries by time: 3-12 months (90-364 days)
const countriesByTime3To12Months = computed(() => {
  return allCountriesByTime.value.filter(c => c.days >= 90 && c.days < 365);
});

// Countries by time: 1-3 months (30-89 days)
const countriesByTime1To3Months = computed(() => {
  return allCountriesByTime.value.filter(c => c.days >= 30 && c.days < 90);
});

// Countries by cities visited - ALL countries (not limited to 10)
const allCountriesByCities = computed(() => {
  const countries: Record<string, { cities: Set<string>; flag: string }> = {};
  travelData.trips.forEach(trip => {
    if (!countries[trip.country]) {
      countries[trip.country] = { cities: new Set(), flag: trip.countryFlag };
    }
    countries[trip.country].cities.add(trip.city);
  });
  return Object.entries(countries)
    .map(([country, data]) => ({ country, cities: data.cities.size, flag: data.flag }))
    .sort((a, b) => b.cities - a.cities);
});

// Countries by cities: 10+ cities
const countriesByCitiesOver10 = computed(() => {
  return allCountriesByCities.value.filter(c => c.cities >= 10);
});

// Countries by cities: 5-9 cities
const countriesByCities5To9 = computed(() => {
  return allCountriesByCities.value.filter(c => c.cities >= 5 && c.cities < 10);
});

// Countries by cities: 2-4 cities
const countriesByCities2To4 = computed(() => {
  return allCountriesByCities.value.filter(c => c.cities >= 2 && c.cities < 5);
});

// Average stay duration
const averageStayDuration = computed(() => {
  if (travelData.trips.length === 0) return 0;
  const totalDays = travelData.trips.reduce((sum, trip) => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    return sum + Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
  }, 0);
  return Math.round(totalDays / travelData.trips.length);
});

// Year range stats
const yearRangeStats = computed(() => {
  const years = travelData.trips.map(t => new Date(t.dateIn).getFullYear());
  const firstYear = Math.min(...years);
  const lastYear = Math.max(...years);
  const uniqueYears = new Set(years).size;
  return { firstYear, lastYear, yearsActive: uniqueYears, span: lastYear - firstYear + 1 };
});

// Hemisphere stats - COUNT UNIQUE CITIES
const hemisphereStats = computed(() => {
  const seen = new Set<string>();
  let northern = 0, southern = 0, eastern = 0, western = 0;
  travelData.trips.forEach(trip => {
    const key = `${trip.city}_${trip.country}`;
    if (seen.has(key)) return;
    seen.add(key);
    if (trip.lat >= 0) northern++; else southern++;
    if (trip.lng >= 0) eastern++; else western++;
  });
  return { northern, southern, eastern, western };
});

// States/Provinces visited - UNIQUE
const uniqueStates = computed(() => new Set(travelData.trips.map(t => `${t.state}, ${t.country}`)).size);

// Unique languages count
const uniqueLanguagesCount = computed(() => new Set(travelData.trips.map(t => t.language)).size);

// Unique cultures count
const uniqueCulturesCount = computed(() => new Set(travelData.trips.map(t => t.culture)).size);

// Unique nomad regions count
const uniqueNomadRegionsCount = computed(() => new Set(travelData.trips.map(t => t.nomadRegion)).size);

// Trips by duration category
const tripsByDurationCategory = computed(() => {
  const categories = { day1: 0, days2_3: 0, week1: 0, weeks2_4: 0, months1_3: 0, months3_6: 0, months6plus: 0 };
  travelData.trips.forEach(trip => {
    const dateIn = new Date(trip.dateIn);
    const dateOut = new Date(trip.dateOut);
    const days = Math.ceil((dateOut.getTime() - dateIn.getTime()) / (1000 * 60 * 60 * 24));
    if (days <= 1) categories.day1++;
    else if (days <= 3) categories.days2_3++;
    else if (days <= 7) categories.week1++;
    else if (days <= 30) categories.weeks2_4++;
    else if (days <= 90) categories.months1_3++;
    else if (days <= 180) categories.months3_6++;
    else categories.months6plus++;
  });
  return categories;
});

// Travel intensity by month
// Geographic extremes
const geographicExtremes = computed(() => {
  let northernmost = travelData.trips[0];
  let southernmost = travelData.trips[0];
  let easternmost = travelData.trips[0];
  let westernmost = travelData.trips[0];
  travelData.trips.forEach(trip => {
    if (trip.lat > northernmost.lat) northernmost = trip;
    if (trip.lat < southernmost.lat) southernmost = trip;
    if (trip.lng > easternmost.lng) easternmost = trip;
    if (trip.lng < westernmost.lng) westernmost = trip;
  });
  return { northernmost, southernmost, easternmost, westernmost };
});

// ============================================
// BREAKDOWN TABLES - Countries & Cities
// ============================================

// Countries breakdown by continent and culture
const countriesBreakdown = computed(() => {
  const byContinent: Record<string, { countries: Set<string>; flags: string[] }> = {};
  const byCulture: Record<string, { countries: Set<string>; flags: string[] }> = {};

  travelData.trips.forEach(trip => {
    // By continent
    if (!byContinent[trip.continent]) {
      byContinent[trip.continent] = { countries: new Set(), flags: [] };
    }
    if (!byContinent[trip.continent].countries.has(trip.country)) {
      byContinent[trip.continent].countries.add(trip.country);
      byContinent[trip.continent].flags.push(trip.countryFlag);
    }

    // By culture
    if (!byCulture[trip.culture]) {
      byCulture[trip.culture] = { countries: new Set(), flags: [] };
    }
    if (!byCulture[trip.culture].countries.has(trip.country)) {
      byCulture[trip.culture].countries.add(trip.country);
      byCulture[trip.culture].flags.push(trip.countryFlag);
    }
  });

  return {
    total: totalCountries.value,
    byContinent: Object.entries(byContinent)
      .map(([name, data]) => ({ name, count: data.countries.size, flags: data.flags.join(' ') }))
      .sort((a, b) => b.count - a.count),
    byCulture: Object.entries(byCulture)
      .map(([name, data]) => ({ name, count: data.countries.size, flags: data.flags.join(' ') }))
      .sort((a, b) => b.count - a.count)
  };
});

// Cities breakdown by continent, culture, and country
const citiesBreakdown = computed(() => {
  const byContinent: Record<string, Set<string>> = {};
  const byCulture: Record<string, Set<string>> = {};
  const byCountry: Record<string, { cities: Set<string>; flag: string }> = {};

  travelData.trips.forEach(trip => {
    const cityKey = `${trip.city}_${trip.country}`;

    // By continent
    if (!byContinent[trip.continent]) byContinent[trip.continent] = new Set();
    byContinent[trip.continent].add(cityKey);

    // By culture
    if (!byCulture[trip.culture]) byCulture[trip.culture] = new Set();
    byCulture[trip.culture].add(cityKey);

    // By country
    if (!byCountry[trip.country]) {
      byCountry[trip.country] = { cities: new Set(), flag: trip.countryFlag };
    }
    byCountry[trip.country].cities.add(trip.city);
  });

  return {
    total: totalCities.value,
    byContinent: Object.entries(byContinent)
      .map(([name, cities]) => ({ name, count: cities.size }))
      .sort((a, b) => b.count - a.count),
    byCulture: Object.entries(byCulture)
      .map(([name, cities]) => ({ name, count: cities.size }))
      .sort((a, b) => b.count - a.count),
    byCountry: Object.entries(byCountry)
      .map(([name, data]) => ({ name, count: data.cities.size, flag: data.flag }))
      .sort((a, b) => b.count - a.count)
  };
});

function initCharts() {
  if (!chartVelocity.value || !chartContinents.value) return;

  // Velocity Chart - calculated from travel data
  const years = tripsByYear.value;
  const sortedYears = Object.keys(years).sort();
  const yearData = sortedYears.map(y => years[parseInt(y)]);

  if (charts.vel) charts.vel.destroy();
  charts.vel = new Chart(chartVelocity.value, {
    type: 'bar',
    data: {
      labels: sortedYears,
      datasets: [{
        label: 'Cities',
        data: yearData,
        backgroundColor: '#06b6d4',
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: '#334155' } },
        x: { grid: { display: false } }
      }
    }
  });

  // Continents Chart - calculated from travel data
  const continents = tripsByContinent.value;
  const continentLabels = Object.keys(continents);
  const continentData = continentLabels.map(c => continents[c]);
  const continentBgColors = continentLabels.map(c => continentColors[c] || '#94a3b8');

  if (charts.cont) charts.cont.destroy();
  charts.cont = new Chart(chartContinents.value, {
    type: 'doughnut',
    data: {
      labels: continentLabels,
      datasets: [{
        data: continentData,
        backgroundColor: continentBgColors,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '80%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#94a3b8' }
        }
      }
    }
  });
}
</script>
