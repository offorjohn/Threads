import { Avatar } from "@chakra-ui/avatar";
import { Box, VStack, Text, Flex, Link } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu"; // Added necessary imports
import { Portal } from "@chakra-ui/portal";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg"; // Correct import statement for "More" icon
import { useToast } from "@chakra-ui/toast";

const UserHeader = () => {
    const toast = useToast()
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: "Account created.",
                status: "success",
                description: "Profile link copied.",
                duration: 3000,
                isClosable: true,
            });
        });




    };
    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Uchiha Sasuke
                    </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"}>Uchiha Sasuke</Text>
                        <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
                            threads.next
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar
                        name="mark Zuckerburg"
                        src="/aa.png"
                        size={{
                            base: "md",


                           md: "xl",
                        }}
                    />
                </Box>
            </Flex>
            <Text>Co-founder, executive chairman and ...</Text>
            <Flex width={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>3.2k followers</Text>
                    <Box width='10px' height='10px' bg={"gray.light"} borderRadius={"full"}></Box>
                    <Link color={"gray.light"} href="https://www.linkedin.com/in/offor-john-690771210/" isExternal>
                        https://www.linkedin.com/in/offor-john-690771210/
                    </Link>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={"pointer"} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gold"}>
                                    <MenuItem bg={"gold"} onClick={copyURL}> Copy link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={"full"}>
                <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                    <Text fontWeight={"bold"}> Posts</Text>
                </Flex>
                <Flex flex={1} borderBottom={"1px solid gray"} justifyContent={"center"}  color={"gray.light"} pb="3" cursor={"pointer"}>
                    <Text fontWeight={"bold"}>Replies</Text>
                </Flex>
            </Flex>

        </VStack>
    );
};

export default UserHeader;
