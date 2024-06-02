import { Link } from 'react-router-dom';
import css from './PopUpDetails.module.scss';
import svg from '../../assets/sprite.svg';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Divider,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { FuaturesTab } from '../FuaturesTab/FuaturesTab';
import { ReviewsTab } from '../ReviewsTab/ReviewsTab';

export const PopUpDetails = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const testOpen = true;

  return (
    <Modal isOpen={testOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="1100px" p="40px">
        <ModalCloseButton />
        <ModalBody>
          <h4 className={css.title}>{data.name}</h4>

          <div className={css.reviewWraper}>
            <Link className={css.link}>
              <Icon as={FaStar} color="yellow.500" width="16px" height="16px" />
              <p>{data.rating}</p>
              <p>({data.reviews.length} Reviews)</p>
            </Link>
            <Icon as={GrLocation} width="16px" height="16px" />
            <p>{data.location}</p>
          </div>
          <p className={css.title}>€{data.price.toFixed(2)}</p>
          <div className={css.imgWrapper}>
            <img src={data.gallery[0]} alt={data.name} className={css.img} />
            <img src={data.gallery[1]} alt={data.name} className={css.img} />
            <img src={data.gallery[2]} alt={data.name} className={css.img} />
          </div>
          <Text className={css.description}>{data.description}</Text>
          <Tabs position="relative" variant="unstyled" mt="28px">
            <TabList className={css.tablistWrapper}>
              <Tab className={css.tabTitle}>Fuatures</Tab>
              <Tab className={css.tabTitle}>Reviews</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#E44848"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel p="0">
                <FuaturesTab />
              </TabPanel>
              <TabPanel>
                <ReviewsTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
