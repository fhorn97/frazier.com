#!/usr/bin/env python3
"""
Generates locations-public.json from locations.json.
Strips: exact coordinates (fuzzes to ~city level for cities/destinations),
photo counts, exact dates. Keeps exact coords only for places of interest
(hotels, restaurants, activities, historical).
"""
import json, random

with open('locations.json') as f:
    data = json.load(f)

public = []
for loc in data:
    if not loc.get('place') or loc['place'] == '_':
        continue
    cat = loc.get('category', 'destination')
    # Only include locations with enough photos to be meaningful
    if loc.get('photos', 0) < 5:
        continue

    entry = {
        'place': loc['place'],
        'category': cat,
    }

    # For specific places of interest, keep exact location
    if cat in ('hotel', 'restaurant', 'activity', 'historical'):
        entry['lat'] = loc['lat']
        entry['lng'] = loc['lng']
    else:
        # Fuzz coordinates for cities/destinations (~1-3km offset)
        entry['lat'] = round(loc['lat'] + random.uniform(-0.02, 0.02), 3)
        entry['lng'] = round(loc['lng'] + random.uniform(-0.02, 0.02), 3)

    # Only show year, not exact date
    if loc.get('first_visit'):
        entry['year'] = loc['first_visit'][:4]

    # Extract country from place name
    parts = loc['place'].split(',')
    if len(parts) >= 2:
        entry['country'] = parts[-1].strip()

    public.append(entry)

with open('public/locations-public.json', 'w') as f:
    json.dump(public, f, indent=2)

print(f"Generated {len(public)} public locations (from {len(data)} private)")
