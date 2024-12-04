# Python setup
- **Create a virtual environment:**
    ``` bash
    python3.12 -m venv .venv 
    ```
    (This creates a virtual environment in a named `.venv` in your current directory. You can choose a different name and .)
    
- **Activate the environment:**
    ```
    source .venv/bin/activate
    ```
    
- **Install `ipykernel` within the environment:**
    ```
    pip install ipykernel
    ```
    
- **(Optional) Make the kernel available to Jupyter:**
    ```
    python -m ipykernel install --user --name=.venv 
    ```
    (Replace `.venv` with your environment's name if you chose a different one.)