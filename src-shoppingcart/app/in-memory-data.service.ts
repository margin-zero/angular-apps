import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products: Product[] = [
            {
            id: 1, name: 'Kurtka KD-001 "Amanda"',
            category: ['kurtki', 'damskie'], sizes: ['SM', 'M', 'L', 'XL', 'XXL'], colors: ['czarny', 'zielony', 'czerwony', 'turkus'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/kurtka01.jpg'
            },

            {
            id: 2, name: 'Kurtka KM-201 "Olivier"',
            category: ['kurtki', 'męskie'], sizes: ['M', 'L', 'XL', 'XXL'], colors: ['czarny', 'niebieski', 'czerwony'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/kurtka02.jpg'
            },

            {
            id: 3, name: 'Kurtka KD-002 "Joanna"',
            category: ['kurtki', 'damskie'], sizes: ['SM', 'M', 'L', 'XL', 'XXL'], colors: ['żółty', 'zielony', 'czerwony'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/kurtka03.jpg'
            },

            {
            id: 4, name: 'Sweter "Jonas"',
            category: ['swetry', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['niebieski', 'czerwony', 'zielony', 'lawendowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/sweter01.jpg'
            },

            {
            id: 5, name: 'Kurtka "Westman"',
            category: ['kurtki', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/kurtka04.jpg'
            },

            {
            id: 6, name: 'Legginsy LD-32',
            category: ['legginsy', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/legginsy01.jpg'
            },

            {
            id: 7, name: 'Spódnica "Fleur"',
            category: ['spódnice', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/spodnica01.jpg'
            },

            {
            id: 8, name: 'Spodnie SD-77',
            category: ['spodnie', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/spodnie01.jpg'
            },

            {
            id: 9, name: 'Spodnie SM-521',
            category: ['spodnie', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/spodnie02.jpg'
            },


            {
            id: 10, name: 'Spodnie SD-9',
            category: ['spodnie', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/spodnie03.jpg'
            },

            {
            id: 11, name: 'Sweter "Gordon"',
            category: ['swetry', 'męskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/sweter02.jpg'
            },

            {
            id: 12, name: 'Sweter "Vivian"',
            category: ['swetry', 'damskie'], sizes: ['SM', 'M', 'L', 'XL'], colors: ['czarny', 'niebieski', 'brązowy'],
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet ac dui a tincidunt. 
            Duis feugiat tellus orci, a cursus nisl suscipit bibendum. Ut ornare nibh quis neque consectetur imperdiet. 
            Phasellus mattis tortor enim, ac volutpat quam molestie et. In hac habitasse platea dictumst. Nunc sem mi, 
            dignissim tempor efficitur non, porta id lacus.`,
            priceNetto: 120, vat: 23, priceBrutto: 147.60,
            previewFile: 'assets/images/sweter03.jpg'
            },
        ];
        return {products};
      }
}
