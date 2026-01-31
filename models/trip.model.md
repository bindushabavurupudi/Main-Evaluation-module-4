    ##Table name: trips

    ##Columns: 
    - id: uuid: primary key
    - customer_id: uuid: foreign key(users(id))
    - vehicle_id: uuid: foreign key(vehicles(id))
    - start_date: date
    - end_date: date
    - location: text : not null
    - distance_km: numeric: not null
    - passengers: int: not null
    - tripCost: numeric
    - isCompleted (default false): boolean
    - created_at: timestamp: default now()

    ##constarints
    - Maximum 3 requests per minute per IP.
    - Number of passengers must not exceed vehicle’s allowed_passengers
    -  Once a trip is created: vehicle isAvailable must become false.

    ## Relationships
    - Many trips belong to one customer
    - Many trips belong to one vehicle