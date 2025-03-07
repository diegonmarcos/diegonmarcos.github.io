# ft_lstsize
``` c 
int	ft_lstsize(t_list *lst);
```
<br>
<br>

# Manual
**Brief:**  
Counts the number of nodes in a linked list.

**File:** `ft_lstsize.c` / **Date:** 2024-06-22  
**Author:** Diego N. Marcos <dnepomuc@student.42barcelona.com>

**Library/Header:**



**Description:**  
This function iterates through the linked list, starting from the node pointed to by `lst`, and counts the number of nodes until it reaches the end of the list (a node whose `next` pointer is NULL).

**Input Values:**  
* `lst`: The address of a pointer to the first link of a list.

**Return Value:**  
* The number of nodes in the list.
* 0 if the list is empty (i.e., `lst` is NULL).

**Note:**
- The function does not modify the list in any way.

**Example:**  
```c
t_list *head = NULL;
// ... add elements to the list ...

int size = ft_lstsize(head);
printf("The list has %d nodes.\n", size);
```

<br>
<br>

# Code Explanation
**Source Code:**
``` C
int	ft_lstsize(t_list *lst)
{
	int		count;

	count = 0;
	while (lst)
	{
		count++;
		lst = lst->next;
	}
	return (count);
}
```


**Comments:**
```C
int ft_lstsize(t_list *lst)
{
    int     count;

    count = 0;  // Initialize a counter variable

    // Iterate through the list
    while (lst)  
    {
        count++;    // Increment the counter for each node
        lst = lst->next;  // Move to the next node
    }
    return (count);  // Return the total number of nodes
}
```