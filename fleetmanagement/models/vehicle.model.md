# Vehicle Model

**Table Name:** vehicles

## Columns
- **id**: integer, primary key, auto-increment
- **name**:string,required
- **driver_id**: integer, foreign key -> users.id (owner role)
- **registration_number**: string, required, unique
- **allowed_passengers**: integer, required
- **rate_per_km**: number, required
- **isAvailable**: boolean, default true
- **created_at**: timestamp, default now()

## Notes
- `owner_id` should reference a user with role `owner`.
- `isAvailable` indicates whether the vehicle can be assigned to a trip.
