import { defineStore } from 'pinia'
import vI18n from 'vue-simple-i18n'

const i18n = new vI18n({
  base: 'en-us', // The base fallback when specified language not exists, defaults to 'en-us'
  locale: 'nl-nl', // Global language, defaults to browser language
  locales: {
    'nl-nl': {
      __name__: 'Nederlands',
      title: 'Maak je kaart',
      backToListButton: 'PLint\'s Playground',
      introduction1: 'Stel je persoonlijke kaart samen. Kies uit:',
      introduction2: 'en de prijs wordt automatisch berekend!',

      product: {
        papershape: 'Vorm',
        papersize: 'Maat',
        amount: 'Aantal',
        quality: 'Kwaliteit',
        headline: 'Titel',
        headlinePlaceholder: 'Uw titel',
        bodytext: 'Bericht',
        bodytextPlaceholder: 'Uw bericht',
        clearLinkText: 'Begin opnieuw'
      },

      addProductButtonText: '+ kaart toevoegen',
      addAnotherProductButtonText: '+ nog een kaart toevoegen',

      price: 'Prijs',

      checkoutButtonText: 'Verder naar afrekenen',
      checkoutTitle: 'Afrekenen',
      checkoutMessage: 'In een echte app zou je nu naar de winkelwagen gaan om af te rekenen. Vandaag eindigt het hier!',
    },
    'en-us': {
      __name__: 'English', // Specify a display name for each language is highly recommended
      title: 'Postcard config',
      backToListButton: 'PLint\'s Playground',
      introduction1: 'Configure your personal postcard:',
      introduction2: 'the price is updated automatically!',

      product: {
        papershape: 'Shape',
        papersize: 'Size',
        amount: 'Amount',
        quality: 'Quality',
        headline: 'Title',
        headlinePlaceholder: 'Your title',
        bodytext: 'Message',
        bodytextPlaceholder: 'Your message',
        clearLinkText: 'Clear configuration'
      },

      addProductButtonText: '+ Add card',
      addAnotherProductButtonText: '+ Add another card',

      price: 'Price',

      checkoutButtonText: 'Proceed to checkout',
      checkoutTitle: 'Checkout',
      checkoutMessage: 'Normally, you would proceed to the checkout, fill out the form and get your product. But this is a demo and this popup is the finish!',
    },
  } 
})

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    i18n
  }),
  getters: {
    lang: (state) => state.i18n.locales[state.i18n.locale]
  },
})
