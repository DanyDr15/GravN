<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/var/www/html/grav/user/themes/quark/blueprints/modular/text.yaml',
    'modified' => 1561152246,
    'data' => [
        'title' => 'Text',
        '@extends' => 'default',
        'form' => [
            'fields' => [
                'tabs' => [
                    'fields' => [
                        'content' => [
                            'fields' => [
                                'header.media_order' => [
                                    'label' => 'Page Media (first one will be displayed next to your content)'
                                ],
                                'header.image_align' => [
                                    'type' => 'select',
                                    'label' => 'Image position',
                                    'classes' => 'fancy',
                                    'default' => 'left',
                                    'options' => [
                                        'left' => 'Left',
                                        'right' => 'Right'
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
