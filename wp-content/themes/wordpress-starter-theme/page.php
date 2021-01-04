<?php get_header(); ?>

	<main id="main" class="page-main" role="main">

		<div class="page-container">
            <?php while ( have_posts() ) : the_post(); ?>

                <?php get_template_part( 'template-parts/content', 'page' ); ?>

                <?php // If comments are open or we have at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) :
                    comments_template();
                endif; ?>

            <?php endwhile; ?>
        </div>

	</main>

<?php get_footer(); ?>
