<?php get_header(); ?>

	<main id="main" class="page-main" role="main">
        <div class="page-container">
            <?php if ( have_posts() ) : ?>

                <?php while ( have_posts() ) : the_post(); ?>

                    <?php get_template_part( 'template-parts/content', get_post_format() ); ?>

                <?php endwhile; ?>

                <?php the_posts_navigation(); ?>

            <?php else : ?>

                <?php get_template_part( 'template-parts/content', 'none' ); ?>

            <?php endif; ?>
            <example-vue-component></example-vue-component>
        </div>
	</main>

<?php get_footer(); ?>
