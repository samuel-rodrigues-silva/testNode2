create table customer(
    id serial primary key,
    cpf varchar(15) not null,
    nome varchar(100) not null,
    email varchar(100) not null
);

insert into customer(cpf,nome,email) values ('Joâo','11111','joao@gmail.com');