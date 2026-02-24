create table if not exists public.registrations (
  id bigserial primary key,
  player_a_fullname text not null,
  player_a_address text not null,
  player_a_contact text not null,
  player_a_tshirt_size text not null,
  player_a_facebook text,
  player_b_fullname text not null,
  player_b_address text not null,
  player_b_contact text not null,
  player_b_tshirt_size text not null,
  player_b_facebook text,
  proof_url text,
  status text not null default 'PENDING',
  admin_note text,
  created_at timestamptz not null default now()
);
create index if not exists registrations_status_created_at on public.registrations (status, created_at desc);
