<template>
    <section class="personal">
        <DesignShapeLeft />
        <div class="personal__imageWrapper" v-in-viewport.once>
            <img src="@/assets/images/markus_sommer.jpg?webp?resize&size=420" alt='Bild von Markus Sommer' title='Bild von Markus Sommer' class="personal__image" />
        </div>
        <div class="personal__content">
            <h2>Mein Name ist Markus Sommer</h2>
            <h3>Webentwickler, Frontend Artist und Designer</h3>
            <p>Brauchst du Hilfe z. B. <strong>deine Website in neuem Glanz</strong> erstrahlen zu lassen? Oder einfach nur mal einen Tipp wie du am besten eine <strong>Sitemap
                einrichtest?</strong></p>
            <p>Dann melde dich bei mir. Ich stehe gerne mit Rat und Tat zur Seite.</p>
            <dl class="personal__skills">
                <Skill title='CSS' value="90" />
                <Skill title='HTML' value="95" />
                <Skill title='JavaScript' value="70" />
                <Skill title='PHP' value="80" />
                <Skill title='React' value="50" />
                <Skill title='Vue' value="60" />
            </dl>
        </div>
    </section>
</template>

<script>
    import Skill from './Skill';
    import DesignShapeLeft from './DesignShapeLeft';

    export default {
        components: {
            Skill,
            DesignShapeLeft,
        },
    };
</script>

<style lang="scss">
    .personal {
        display: flex;
        flex-flow: row;
        margin-top: 250px;
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
        padding-right: 1rem;
        padding-left: 1rem;
        position: relative;
    }

    .personal__image {
        position: relative;
    }

    .personal__imageWrapper {
        max-width: 420px;
        display: inline-block;
        position: relative;
        align-self: flex-start;

        &:after {
            content: '';
            display: inline-block;
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 40px;
            right: -40px;
            border: 0 solid;
            border-image: linear-gradient(135deg, #f03f32 0%, #360940 100%);
            border-image-slice: 5;
            transition: border-width 0.6s linear;
        }
    }

    .personal__imageWrapper.in-viewport:after {
        border-width: 5px;
    }

    .personal__content {
        max-width: 750px;
        margin-left: 150px;
    }
</style>
