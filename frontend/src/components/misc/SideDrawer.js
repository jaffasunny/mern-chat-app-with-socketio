import { BellIcon } from "@chakra-ui/icons";
import { Box, Button, Tooltip, Text, Menu, MenuButton } from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("second");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
        w='100%'
        p='5px 10px 5px 10px'
        borderWidth='5px'>
        <Tooltip label='Search users to chat' hasArrow placement='bottom-end'>
          <Button variant='ghost'>
            <i className='fas fa-search'></i>
            <Text d={{ base: "none", md: "flex" }} px='4'>
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize='2xl' fontFamily='Work sans'>
          Talk-A-Tive
        </Text>

        <Menu>
          <MenuButton p='1'>
            <BellIcon fontSize='2xl' m='1' />
          </MenuButton>
          {/* <MenuList></MenuList> */}
        </Menu>
      </Box>
    </>
  );
};

export default SideDrawer;
