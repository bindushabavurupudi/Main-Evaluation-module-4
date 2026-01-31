Table name: trips

Columns: 
    -id: uuid: primary key
    -customer_id: uuid: foreign key(users(id))
    -vehicle_id: uuid: foreign key(vehicles(id))
    -start_date: date
    -end_date: date
    -location: text : not null
    -distance_km: numeric: not null
    -passengers: int: not null
    -tripCost: numeric
    -isCompleted (default false): boolean
    -created_at: timestamp: default now()