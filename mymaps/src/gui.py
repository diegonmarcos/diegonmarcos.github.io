#!/usr/bin/env python3
"""
MyMaps GUI - Strategic Map Configurator
Tkinter-based GUI for configuring and generating maps.
"""

import tkinter as tk
from tkinter import messagebox
from tkinter import ttk
import csv
import subprocess
import webbrowser
import os
from pathlib import Path

# Paths relative to this script
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
MAPS_DIR = PROJECT_DIR / "maps"

CONFIG_FILE = SCRIPT_DIR / "config.csv"
INPUT_DATA_FILE = SCRIPT_DIR / "input_data.csv"
SCRIPT_FILE = SCRIPT_DIR / "mymaps.py"
INDEX_FILE = PROJECT_DIR / "index.html"


class MapConfigEditor(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Strategic Map Configurator")
        self.geometry("700x600")

        self.config_data = {}
        self.entries = {}

        self.load_config()
        self.create_widgets()

    def load_config(self):
        self.config_data = {}
        if CONFIG_FILE.exists():
            try:
                with open(CONFIG_FILE, mode='r', encoding='utf-8') as csvfile:
                    reader = csv.reader(csvfile)
                    next(reader, None)
                    for row in reader:
                        if len(row) >= 2:
                            self.config_data[row[0].strip()] = row[1].strip()
            except Exception as e:
                messagebox.showerror("Error", f"Could not load config: {e}")
        else:
            self.config_data = {
                'map_path': 'custom/world',
                'join_by': 'hc-key',
                'title': 'Strategic Map',
                'data_code_column': 'code',
                'data_name_column': 'name',
                'data_role_column': 'role',
                'data_sphere_column': 'sphere'
            }

    def get_csv_headers(self):
        """Reads headers from input_data.csv to populate dropdowns."""
        if INPUT_DATA_FILE.exists():
            try:
                with open(INPUT_DATA_FILE, mode='r', encoding='utf-8') as f:
                    reader = csv.reader(f)
                    headers = next(reader, [])
                    return headers
            except Exception:
                return []
        return []

    def get_map_options(self):
        return [
            "custom/world",
            "custom/europe",
            "countries/us/us-all",
            "countries/cn/cn-all",
            "countries/ru/ru-all",
            "countries/de/de-all",
            "countries/gb/gb-all",
            "countries/fr/fr-all",
            "countries/br/br-all",
            "countries/in/in-all"
        ]

    def get_existing_maps(self):
        """Get list of existing maps in maps/ folder."""
        if MAPS_DIR.exists():
            return sorted([f.name for f in MAPS_DIR.glob('*.html')])
        return []

    def create_widgets(self):
        # Title
        tk.Label(self, text="Map Configuration", font=("Arial", 16, "bold")).pack(pady=10)

        # Form Frame
        form_frame = tk.Frame(self)
        form_frame.pack(pady=10, padx=20, fill="x")

        csv_headers = self.get_csv_headers()
        map_options = self.get_map_options()
        join_options = ["hc-key", "iso-a2", "iso-a3", "name"]

        fields = [
            ("Map Path:", 'map_path', 'combo', map_options),
            ("Join By:", 'join_by', 'combo', join_options),
            ("Map Title:", 'title', 'entry', None),
            ("Output Filename:", 'output_name', 'entry', None),
            ("Data Code Column:", 'data_code_column', 'combo', csv_headers),
            ("Data Name Column:", 'data_name_column', 'combo', csv_headers),
            ("Data Role Column:", 'data_role_column', 'combo', csv_headers),
            ("Data Sphere Column:", 'data_sphere_column', 'combo', csv_headers)
        ]

        for i, (label_text, key, widget_type, options) in enumerate(fields):
            tk.Label(form_frame, text=label_text, anchor="w").grid(row=i, column=0, sticky="w", pady=5)

            current_val = self.config_data.get(key, "")

            if widget_type == 'combo':
                widget = ttk.Combobox(form_frame, values=options, width=38)
                if current_val in options:
                    widget.set(current_val)
                else:
                    widget.set(current_val)
            else:
                widget = tk.Entry(form_frame, width=40)
                widget.insert(0, current_val)

            widget.grid(row=i, column=1, sticky="e", pady=5, padx=10)
            self.entries[key] = widget

        # Buttons Frame
        btn_frame = tk.Frame(self)
        btn_frame.pack(pady=20)

        tk.Button(btn_frame, text="Save Config", command=self.save_config,
                  bg="#dddddd", width=15).pack(side="left", padx=5)
        tk.Button(btn_frame, text="Generate Map", command=self.generate_map,
                  bg="#add8e6", width=15).pack(side="left", padx=5)
        tk.Button(btn_frame, text="Open Map", command=self.open_map,
                  bg="#90ee90", width=15).pack(side="left", padx=5)
        tk.Button(btn_frame, text="Open Index", command=self.open_index,
                  bg="#ffb366", width=15).pack(side="left", padx=5)

        # Existing Maps Section
        maps_frame = tk.LabelFrame(self, text="Generated Maps", padx=10, pady=10)
        maps_frame.pack(pady=10, padx=20, fill="both", expand=True)

        self.maps_listbox = tk.Listbox(maps_frame, height=6)
        self.maps_listbox.pack(fill="both", expand=True, side="left")

        scrollbar = tk.Scrollbar(maps_frame, orient="vertical", command=self.maps_listbox.yview)
        scrollbar.pack(side="right", fill="y")
        self.maps_listbox.config(yscrollcommand=scrollbar.set)

        self.refresh_maps_list()

        # Map list buttons
        map_btn_frame = tk.Frame(self)
        map_btn_frame.pack(pady=5)

        tk.Button(map_btn_frame, text="Refresh List", command=self.refresh_maps_list,
                  width=12).pack(side="left", padx=5)
        tk.Button(map_btn_frame, text="Open Selected", command=self.open_selected_map,
                  width=12).pack(side="left", padx=5)

    def refresh_maps_list(self):
        """Refresh the list of generated maps."""
        self.maps_listbox.delete(0, tk.END)
        for map_file in self.get_existing_maps():
            self.maps_listbox.insert(tk.END, map_file)

    def save_config(self):
        try:
            with open(CONFIG_FILE, mode='w', encoding='utf-8', newline='') as csvfile:
                writer = csv.writer(csvfile)
                writer.writerow(['setting', 'value'])
                for key, entry in self.entries.items():
                    writer.writerow([key, entry.get().strip()])
            return True
        except Exception as e:
            messagebox.showerror("Error", f"Could not save config: {e}")
            return False

    def generate_map(self):
        if self.save_config():
            try:
                output_name = self.entries.get('output_name')
                output_arg = output_name.get().strip() if output_name else ""

                cmd = ["python3", str(SCRIPT_FILE)]
                if output_arg:
                    cmd.append(output_arg)

                result = subprocess.run(cmd, capture_output=True, text=True, cwd=str(SCRIPT_DIR))
                if result.returncode == 0:
                    self.refresh_maps_list()
                    messagebox.showinfo("Success", "Map generated successfully!\n\n" + result.stdout)
                else:
                    messagebox.showerror("Error", f"Script failed:\n{result.stderr}\n{result.stdout}")
            except Exception as e:
                messagebox.showerror("Error", f"Could not run script: {e}")

    def open_map(self):
        """Generate and open the most recent map."""
        if self.save_config():
            try:
                output_name = self.entries.get('output_name')
                output_arg = output_name.get().strip() if output_name else ""

                cmd = ["python3", str(SCRIPT_FILE)]
                if output_arg:
                    cmd.append(output_arg)

                result = subprocess.run(cmd, capture_output=True, text=True, cwd=str(SCRIPT_DIR))
                if result.returncode != 0:
                    messagebox.showerror("Error", f"Script failed:\n{result.stderr}")
                    return

                self.refresh_maps_list()

                # Find the generated map
                if output_arg:
                    map_name = output_arg if output_arg.endswith('.html') else output_arg + '.html'
                else:
                    title = self.entries['title'].get().strip().lower()
                    safe_title = ''.join(c if c.isalnum() else '_' for c in title)
                    map_name = f"{safe_title}.html"

                map_path = MAPS_DIR / map_name
                if map_path.exists():
                    webbrowser.open(f'file://{map_path}')
                else:
                    messagebox.showwarning("Warning", f"Map file not found: {map_path}")

            except Exception as e:
                messagebox.showerror("Error", f"Could not open map: {e}")

    def open_selected_map(self):
        """Open the selected map from the list."""
        selection = self.maps_listbox.curselection()
        if selection:
            map_name = self.maps_listbox.get(selection[0])
            map_path = MAPS_DIR / map_name
            if map_path.exists():
                webbrowser.open(f'file://{map_path}')
        else:
            messagebox.showinfo("Info", "Please select a map from the list.")

    def open_index(self):
        """Open the main index.html."""
        if INDEX_FILE.exists():
            webbrowser.open(f'file://{INDEX_FILE}')
        else:
            messagebox.showwarning("Warning", f"Index file not found: {INDEX_FILE}")


if __name__ == "__main__":
    app = MapConfigEditor()
    app.mainloop()
