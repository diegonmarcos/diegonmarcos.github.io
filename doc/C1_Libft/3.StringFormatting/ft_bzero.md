# ft_bzero
``` c 
void ft_bzero(void *s, size_t n);
```
<br>
<br>

# Manual
**Brief:**
Erases the data in the `n` bytes of the memory starting at the location pointed to by `s`, by writing zeros (`'\0'`) to that area.

**File:** `ft_bzero.c` / **Date:** 2024-06-22
**Author:** Diego N. Marcos <dnepomuc@student.42barcelona.com>

**Library:**
* `strings.h `

**Description:**
The `ft_bzero()` function erases the data in the `n` bytes of the memory starting at the location pointed to by `s`, by writing zeros (`'\0'`) to that area.

**Input Values:**
* `s`: Pointer to the memory area to be set to zero.
* `n`: The number of bytes to be set to zero.

**Return Value:**
* None.

**Note:**
- The behavior is undefined if the pointer `s` is invalid or if `n` is greater than the size of the memory pointed to by `s`.

**Example:**
```c
char str[10] = "Hello";
ft_bzero(str, 5);  // The first 5 bytes of str are now zeroed out
```

<br>
<br>

# Code Explanation
**Source Code:**
``` C
void	ft_bzero(void *s, size_t n)
{
	char	*tmp_ptr;

	tmp_ptr = (char *) s;
	while (n > 0)
	{
		*(tmp_ptr++) = 0;
		n--;
	}
}


```

[ft_memset](ft_memset.md)
