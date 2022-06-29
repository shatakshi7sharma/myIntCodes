function is_it_a_date(d){
    return d instanceof Date;
    }
     console.log(is_it_a_date(new Date("October 14, 2014 11:12:00")));
    console.log(is_it_a_date(new Date(86400000)))