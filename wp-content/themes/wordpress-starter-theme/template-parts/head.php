<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php if ( ! has_site_icon() ) : ?>
    <link href="<?php echo get_theme_file_uri( '/dist/icons/favicon.ico' ); ?>" rel="icon" type="image/x-icon">
<?php endif; ?>
<?php wp_head(); ?>
