<?php
/**
 * Enqueue scripts and styles.
 */
function enqueue_theme_scripts() {
    // Styles
    wp_enqueue_style( 'theme-main-style', get_template_directory_uri() . '/dist/css/bundle.css' );
    // Scripts
    wp_enqueue_script( 'theme-script', get_template_directory_uri() . '/dist/js/bundle.js', array( "jquery" ), false, true );
}

function enqueue_comments_reply() {

    if ( is_singular() && comments_open() && ( get_option( 'thread_comments' ) == 1 ) ) {
        // Load comment-reply.js (into footer)
        wp_enqueue_script( 'comment-reply', '/wp-includes/js/comment-reply.min.js', array(), false, true );
    }
}

function enqueue_gutenberg_scripts() {
    if ( file_exists( get_theme_file_path( '/dist/js/editor.js' ) ) ) {
        wp_enqueue_script( 'be-editor', get_stylesheet_directory_uri() . '/dist/js/editor.js', array(
            'wp-blocks',
            'wp-dom'
        ), false, true );
    }
}

function enqueue_gutenberg_styles() {
    if ( file_exists( get_theme_file_path( '/dist/css/editor.css' ) ) ) {
        add_editor_style( 'dist/css/editor.css' );
    }
}

//Actions
add_action( 'enqueue_block_editor_assets', 'enqueue_gutenberg_scripts' );
add_action( 'after_setup_theme', 'enqueue_gutenberg_styles' );
add_action( 'wp_enqueue_scripts', 'enqueue_comments_reply' );
add_action( 'wp_enqueue_scripts', 'enqueue_theme_scripts' );
