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
            <?php echo VarToJS([
                "test" => "test",
                "test1" => 1.2,
                "test2" => 1,
                "test3" => [1, 2, 4, 'fsadf'],
                "test4" => [
                    "test" => [1, 2, 3, 4],
                    "test1" => ["test1", "test2"]
                ],
                "test5" => get_post(1)
            ])?>
            <example-vue-component></example-vue-component>
        </div>
	</main>

<?php get_footer(); ?>
