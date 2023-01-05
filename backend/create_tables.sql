create table user
(
    id       int auto_increment
        primary key,
    username varchar(100)  null,
    password varchar(100)  null,
    photo    varchar(1000) null,
    constraint user_id_uindex
        unique (id)
);
