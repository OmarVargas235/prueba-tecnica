## Text

```sh
import Text from 'layauts/Text';

const Component = (): JSX.Element => {
    
    return <Text
        color='#0E0E0E'
        size="20px"
        weight='bold'
        className='text-center mx-1'
        isUppercase={true}
    >Hola Mundo</Text>;
}
```

## Props esquema

Props
-------

|  params     |         required         |    type   |
| ----------- | :----------------------: | :-------: |
| color       | :heavy_multiplication_x: | `string`  |
| size        | :heavy_multiplication_x: | `string`  |
| weight      | :heavy_multiplication_x: | `string`  |
| isUppercase | :heavy_multiplication_x: | `boolean` |