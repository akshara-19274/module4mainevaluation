# Trip Model

**Table Name:** trips

## Columns
- **id**: integer, primary key, auto-increment
- **customer_id**: integer, foreign key -> users.id (customer role)
- **vehicle_id**: integer, foreign key -> vehicles.id
- **start_date**: timestamp, required
- **end_date**: timestamp, nullable
- **location**: string (pickup location or route description)
- **distance_km**: number, required
- **passengers**: integer, required
- **isCompleted**: boolean, default false
- **trip_cost**: number, nullable (calculated on end)
- **created_at**: timestamp, default now()

## Notes
- `trip_cost` should be computed as `distance_km * vehicle.rate_per_km` when ending a trip.
- Setting `isCompleted` to true should also mark the associated vehicle's `isAvailable` to true.
