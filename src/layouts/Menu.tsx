import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Stack } from '@mui/material'
import { MenuCard, type MenuCardProps } from '../components/MenuCard'

const MenuItems: MenuCardProps[] = [
  {
    imageURL: '/artichoke256.jpg',
    title: 'Artichoke',
    label: 'Spaghetti with Hearts of Artichoke',
    price: 8.99,
    description:
      'Our artichokes are sourced from the finest farms in Italy, and are served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/chicken-potato256.jpg',
    title: 'Chicken and Potato',
    label: 'Chicken and Potato',
    price: 15.99,
    description:
      'Our chicken and potatoes are roasted to perfection, and served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/drums256.jpg',
    title: 'Chicken Drumsticks',
    label: 'Roasted Chicken Drumsticks',
    price: 10.99,
    description: 'Our drumsticks are sourced from locally raised free range chicken farms.',
  },
  {
    imageURL: '/fettucine-tomato256.jpg',
    title: 'Fettuccine',
    label: 'Fettuccine with Tomato Sauce',
    price: 12.99,
    description:
      'Our fettuccine is made from the finest semolina flour and served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/lasagna256.jpg',
    title: 'Lasagna',
    label: 'Lasagna',
    price: 14.99,
    description:
      'Our lasagna is made from the finest semolina flour and served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/meatball256.jpg',
    title: 'Spaghetti with Meatball',
    label: 'Spaghetti with Meatball',
    price: 12.99,
    description: 'Our meatballs are made from the finest beef and served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/mussels256.jpg',
    title: 'Mussels',
    label: 'Mussels in White Wine Sauce',
    price: 16.99,
    description:
      'Our fresh farm-raised mussels are sourced from the finest coastal mussel farms, and are served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: 'okra256.jpg',
    title: 'Okra',
    label: 'Okra with Tomato Sauce',
    price: 10.99,
    description:
      'Our okra is locally sourced.',
  },
  {
    imageURL: 'pork-cutlet256.jpg',
    title: 'Pork Cutlet',
    label: 'Pork Cutlet',
    price: 12.99,
    description: 'Our pork cutlet is made from the finest pork and served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/prawns256.jpg',
    title: 'Prawns',
    label: 'Prawns in White Wine Sauce',
    price: 18.99,
    description:
      'Our fresh farm-raised prawns are sourced from the finest coastal prawn farms, and are served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/redfish256.jpg',
    title: 'Redfish',
    label: 'Redfish in White Wine Sauce',
    price: 18.99,
    description:
      'Our fresh farm-raised redfish are sourced from the finest coastal redfish farms, and are served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/ribcap256.jpg',
    title: 'Rib Cap',
    label: 'Rib Cap',
    price: 98.99,
    description: 'Our rib cap is made from the finest grass-fed beef. Our supplier is Applegate\u00AE Organic Beef farmers.',
  },
  {
    imageURL: '/spam256.jpg',
    title: 'Spam',
    label: 'Spam',
    price: 8.99,
    description: 'Our spam is made from the finest pork byproducts in a can and served with a side of our homemade garlic aioli.',
  },
  {
    imageURL: '/swordfish-egg256.jpg',
    title: 'Swordfish and Egg',
    label: 'Swordfish and Egg',
    price: 23.99,
    description:
      'Our fresh caught swordfish is served with a fried egg for a reason nobody can remember.',
  },
  {
    imageURL: '/greek salad.jpg',
    title: 'Greek Salad',
    label: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    imageURL: '/bruchetta.svg',
    title: 'Bruschetta',
    label: 'Bruschetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    imageURL: '/lemon dessert.jpg',
    title: 'Lemon Dessert',
    label: 'Lemon Dessert',
    price: 5.0,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
]

export const Menu = () => {
  return (
    <>
      <Header />
      <Stack className='menu' direction='column' alignItems='center' component={'section'}>
        <h2>Menu</h2>
          <Stack direction='row' spacing={4} className='cards' alignItems='start' flexWrap='wrap'>
            {MenuItems.map((menuCard) => (
              <MenuCard key={menuCard.label} {...menuCard} />
            ))}
          </Stack>
      </Stack>
      <Footer />
    </>
  )
}

export default Menu
