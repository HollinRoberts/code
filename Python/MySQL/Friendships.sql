select concat(clients.first_name,' ',clients.last_name)as Name, group_concat(' ',sites.domain_name separator ' /' ) as sites
from clients
join sites
on clients.client_id = sites.client_id
group by concat(clients.first_name,' ',clients.last_name)


