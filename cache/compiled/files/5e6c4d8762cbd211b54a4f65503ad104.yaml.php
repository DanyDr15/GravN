<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/var/www/html/grav/user/config/plugins/email.yaml',
    'modified' => 1561860211,
    'data' => [
        'enabled' => true,
        'from' => 'dapianchiche@gmail.com',
        'to' => 'dapianchiche@gmail.com',
        'queue' => [
            'enabled' => false,
            'flush_frequency' => '* * * * *',
            'flush_msg_limit' => 10,
            'flush_time_limit' => 100
        ],
        'mailer' => [
            'engine' => 'smtp',
            'smtp' => [
                'server' => 'localhost',
                'port' => 465,
                'encryption' => 'ssl',
                'user' => 'dapianchiche@gmail.com',
                'password' => '12345Dany'
            ],
            'sendmail' => [
                'bin' => '/usr/sbin/sendmail -bs'
            ]
        ],
        'content_type' => 'text/html',
        'debug' => false
    ]
];
