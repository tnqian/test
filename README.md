# Test

- 1. crete database simple_api
- 2. command -> node_modules/.bin/sequelize db:migrate  (migrate data)




Continued from Question 2 & 3, you want to calculate the sum of commissions earned by the employees every month. Please

1) Expand existing DB models (new fields/tables) by providing an ERD.

2) Provide the necessary SQL statement to add necessary fields or tables to store employees’ commission.

3) Provide the necessary SQL statement that calculates the sum of commissions earned by the employees every month. If an employee doesn’t receive any commission, it should be calculated as zero.
Your Solution


POST localhost:2043/get_employees
body {
    keyword
}

POST localhost:2043/save_employee
body {
    "name"  :"name",
    "email" :"email",
    "status": status
}


employee [1 to many ] employee_commision


employee_commision
--------------------------------------------------------
Column		Type
--------------------------------------------------------
id				INT(11) PK
employee_id		INT(11)
amount			double
created_at		datetime
--------------------------------------------------------

(SELECT
    e.employee_id,
    e.name,
    IFNULL(SUM(ec.amount * 1), 0) AS amount
FROM
    simple_api.employees AS e
        LEFT JOIN
    simple_api.employee_commisions AS ec ON e.employee_id = ec.employee_id
WHERE
    ec.created_at >= DATE_FORMAT(NOW(), '%Y-%m-01 00:00:00')
        AND ec.created_at <= DATE_FORMAT(NOW(), '%Y-%m-31 23:59:59')) UNION (SELECT
    e.employee_id, e.name, IFNULL(SUM(ec.amount * 1), 0)
FROM
    simple_api.employees AS e
        LEFT JOIN
    simple_api.employee_commisions AS ec ON e.employee_id = ec.employee_id
WHERE
    ec.employee_id IS NULL)