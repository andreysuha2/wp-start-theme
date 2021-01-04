<?php
require_once 'classes/F5_ACF_TO_JSON.php';

function pands_admin_colors() {
    echo '<style type="text/css">
            [id^=acf-group] > div.postbox-header > div > a { display: none; visibility: hidden }
            [id^=acf-group] > div.postbox-header > div > a ~ .handle-order-lower { display: none; visibility: hidden }
            [id^=acf-group] > div.postbox-header > div > a ~ .handle-order-higher { display: none; visibility: hidden }
         </style>';
}

if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page( array(
        'page_title' => 'Theme options',
        'menu_title' => 'Theme options',
        'menu_slug'  => 'theme-settings',
        'redirect'   => true
    ) );

    acf_add_options_sub_page( array(
        'page_title'  => 'Theme Global Settings',
        'menu_title'  => 'Theme Global Settings',
        'parent_slug' => 'theme-settings',
    ) );
    acf_add_options_sub_page( array(
        'page_title'  => 'Header & Footer settings',
        'menu_title'  => 'Header & Footer settings',
        'parent_slug' => 'theme-settings',
    ) );
}

//ACF to JSON

if ( function_exists( 'acf_get_field_groups' ) ) {
    new F5_ACF_TO_JSON();
}

//ACF to JSON end

//ACF Register Block Types

// Example - https://www.advancedcustomfields.com/resources/acf_register_block_type/
