<script setup>
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../stores/i18n';
const i18nStore = useI18nStore()
const { i18n, lang } = storeToRefs(i18nStore)
</script>

<template>
    <nav class="navbar">
        <ul>
            <li class="brand">{{ lang['title'] }}</li>
            <li>
                <form>
                    <div id="language-switcher">
                        <div class="language-input inline nl">
                            <input :id="i18n.locales['nl-nl'].__name__" type="radio" v-model="i18n.locale" value="nl-nl">
                            <label :for="i18n.locales['nl-nl'].__name__"></label>
                        </div>

                        <div class="language-input inline en">
                            <input :id="i18n.locales['en-us'].__name__" type="radio" v-model="i18n.locale" value="en-us">
                            <label :for="i18n.locales['en-us'].__name__"></label>
                        </div>
                    </div>
                </form>
            </li>
            <li><i class="fa fa-undo"></i> <a href="https://plint-demos.nl">{{ lang['backToListButton'] }}</a></li>
        </ul>
    </nav>
</template>

<style lang="less" scoped>
@orange: #FF9900;
.navbar {
    border-radius: 0;
    border-left: none;
    border-top: none;
    border-right: none;
    margin-bottom: 0;
    background: @orange;
    border-color: #cc7a00;
    min-height: auto;

    ul {
        list-style: none;
        padding: 10px;
        margin-bottom: 0;
        display: grid;
        grid-template-columns: 120px 70px 1fr;
        place-items: center;

        li, li > a {
            color: white;
            font-size: 16px;
        }

        li > a {
            text-decoration: underline;
        }

        .brand {
            font-weight: bold;
            justify-self: start;
        }

        li:last-child {
            justify-self: end;
        }
    }
}

/* Custom radiobuttons and checkboxes */
div.language-input {

	&.inline {
		display: inline;
        position: relative;
        top: -3px;
	}

	label {
		font-size: 15px;
		/*margin-right: 10px;*/
	}

	/* General icon styling */
	input[type=radio] {
	    border: 0;
	    clip: rect(0 0 0 0);
	    height: 1px;
	    margin: -1px;
	    overflow: hidden;
	    padding: 0;
	    position: absolute;
	    width: 1px;
	}

	/* Unchecked icon styling */
	input[type=radio] ~ label:before {
	    display: inline-block;
	    position: relative;
	    top: 7px;
        opacity: 0.3;
	}

    &.nl {
        input[type=radio] ~ label:before {
            content: url(../assets/nl.png);
        }

        label {
            margin-right: 10px;
        }
    }

    &.en {
        input[type=radio] ~ label:before {
            content: url(../assets/en.png);
        }
    }

	/* Checked radio icon styling */
	input[type=radio]:checked ~ label:before {
        opacity: 1;
	}
}
</style>

