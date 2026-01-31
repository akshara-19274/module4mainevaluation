# User Model

**Table Name:** users

## Columns
- **id**: integer, primary key, auto-increment
- **name**: string, required
- **email**: string, required, unique
- **password**: string, required (hashed)
- **role**: enum('customer','owner','driver'), required
- **created_at**: timestamp, default now()

## Notes
- Passwords must be stored hashed (do not store plain text).
- `role` controls access and available operations in the system.
