import { Text, Flex } from '@radix-ui/themes';

const Logo = () => {
  return (
    <Flex align='center'>
      <Text size='6' className='font-bold' as='span'>
        TaskManager
      </Text>
    </Flex>
  );
};

export default Logo;
