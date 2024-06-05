import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import aClass from '../../assets/campers/a-class.webp';
import coachbuilt from '../../assets/campers/coachbuilt.webp';
import lowProfile from '../../assets/campers/low-profile.webp';
import van from '../../assets/campers/van.webp';
import vwT6 from '../../assets/campers/vw-t6.webp';
import css from './VehicleCards.module.scss';

export const VehicleCards = () => {
  return (
    <Box className={css.vehicleWraper}>
      <Card className={css.vehicleCard}>
        <CardBody>
          <Image src={aClass} alt="A-Class Campervan" borderRadius="lg" />
          <Stack mt="6" spacing="3" alignItems="center">
            <Heading size="md">A-Class Campervan</Heading>
            <Text>
              Просторий та розкішний будинок на колесах класу A, оснащений всіма
              необхідними зручностями для комфортної подорожі. Ідеальний для
              великих сімей або груп друзів.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card className={css.vehicleCard}>
        <CardBody>
          <Image
            src={coachbuilt}
            alt="Coachbuilt Campervan"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3" alignItems="center">
            <Heading size="md">Coachbuilt Campervan</Heading>
            <Text>
              Надійний та функціональний будинок на колесах з додатковим
              житловим простором над кабіною водія. Чудовий вибір для сімейних
              поїздок.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card className={css.vehicleCard}>
        <CardBody>
          <Image
            src={lowProfile}
            alt="Low Profile Campervan"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3" alignItems="center">
            <Heading size="md">Low Profile Campervan</Heading>
            <Text>
              Компактний та економічний будинок на колесах, що поєднує стиль та
              комфорт. Ідеальний для пар або невеликих сімей.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card className={css.vehicleCard}>
        <CardBody>
          <Image src={van} alt="Van Conversion Campervan" borderRadius="lg" />
          <Stack mt="6" spacing="3" alignItems="center">
            <Heading size="md">Van Conversion Campervan</Heading>
            <Text>
              Практичний будинок на колесах на базі фургона, який забезпечує всі
              необхідні зручності для подорожі. Підходить для тих, хто любить
              мобільність та комфорт.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card className={css.vehicleCard}>
        <CardBody>
          <Image src={vwT6} alt="VW T6 Campervan" borderRadius="lg" />
          <Stack mt="6" spacing="3" alignItems="center">
            <Heading size="md">VW T6 Campervan</Heading>
            <Text>
              Стильний та компактний будинок на колесах на базі Volkswagen T6.
              Ідеальний для коротких подорожей та вихідних на природі.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};