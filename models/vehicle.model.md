## Table Name: vehicles

## Columns
- id: uuid : primary key
- name: text: not null
- registration_number : text: (unique) : not null
- allowed_passengers: int : not null
- isAvailable : boolean: (default true)
- driver_id : uuid : foreign key(users(id)): nullable
- rate_per_km: numeric: not null
- owner_id: uuid: foreign key(users(id)): not null
- created_at: timestamp: default now()

## Constraints
- registration number must be unique
- behicle is available by default
- driver assignment is optional initially


##Relationships
- many vehicles belong to one owner
- one vehicle can have one driver
- one vehicle can be used in many trips