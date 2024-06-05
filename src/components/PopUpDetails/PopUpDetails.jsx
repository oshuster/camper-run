import css from './PopUpDetails.module.scss';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';

import { FuaturesTab } from '../FuaturesTab/FuaturesTab';
import { ReviewsTab } from '../ReviewsTab/ReviewsTab';
import { ReviewSection } from '../PopUpDetails/ReviewSection/ReviewSection';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useSelector } from 'react-redux';
import { selectAditionalInfo } from '../../redux/adverts/advertsSelectors';

export const PopUpDetails = ({ isOpen, onClose }) => {
  const data = useSelector(selectAditionalInfo);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="1100px" p="40px">
        <ModalCloseButton />
        <ModalBody>
          <h4 className={css.title}>{data.name}</h4>
          <ReviewSection
            rating={data.rating}
            reviews={data.reviews}
            location={data.location}
          />
          <p className={css.title}>€{data.price.toFixed(2)}</p>
          <ImageGallery gallery={data.gallery} name={data.name} />
          <Text className={css.description}>{data.description}</Text>
          <Tabs position="relative" variant="unstyled" mt="28px">
            <TabList className={css.tablistWrapper}>
              <Tab className={css.tabTitle}>Features</Tab>
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
              <TabPanel p="0">
                <ReviewsTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
