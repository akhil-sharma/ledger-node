create table tb_user_balance (
	username varchar(50) NOT NULL,
    balance decimal default 0,
    updated_at timestamp default current_timestamp on update current_timestamp,
    unique key `username` (`username`)
)auto_increment=5;

select * from tb_user_balance;

create table tb_user_transactions (
	transaction_id INT NOT NULL auto_increment,
    from_user varchar(50) NOT NULL,
    to_user varchar(50) NOT NULL,
    amount decimal NOT NULL,
    created_at timestamp default current_timestamp,
    unique key `transaction_id` (`transaction_id`)
);

select * from tb_user_transactions;