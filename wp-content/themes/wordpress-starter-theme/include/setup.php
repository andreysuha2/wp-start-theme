<?php

add_action( 'after_setup_theme', 'theme_setup' );

function theme_setup() {

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'customize-selective-refresh-widgets' );

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus( [
        'menu-1' => esc_html__( 'Main menu', 'theme' )
    ] );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption',
        'style',
        'script'
    ) );

    add_theme_support( 'editor-color-palette', [
        array(
            'name'  => __( 'Color Black', 'theme' ),
            'slug'  => 'dark',
            'color' => '#000',
        ),
        array(
            'name'  => __( 'Color Brand', 'theme' ),
            'slug'  => 'brand',
            'color' => '#272727',
        ),
        array(
            'name'  => __( 'Color Second', 'theme' ),
            'slug'  => 'second',
            'color' => '#e8e8e1',
        ),
    ] );

    add_theme_support( 'editor-font-sizes', [
        array(
            'name' => __( 'Small', 'theme' ),
            'size' => 32,
            'slug' => 'small'
        ),
        array(
            'name' => __( 'Regular', 'theme' ),
            'size' => 38,
            'slug' => 'regular'
        ),
        array(
            'name' => __( 'Large', 'theme' ),
            'size' => 58,
            'slug' => 'large'
        ),
        array(
            'name' => __( 'Huge', 'theme' ),
            'size' => 75,
            'slug' => 'huge'
        )
    ] );

    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'disable-custom-font-sizes' );
    add_theme_support( 'editor-styles' );
}
