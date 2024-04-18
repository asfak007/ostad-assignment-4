import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Button, Img, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function UpdateFoodPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Update Food - Modify Menu Items</title>
        <meta
          name="description"
          content="Keep your menu current by updating food items. Change names, categories, prices, and images to ensure your offerings reflect the latest tastes and trends."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full items-start gap-[38px] bg-white-A700 md:flex-col">
        {/* sidebar navigation section */}
        <Sidebar
          width="242px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-100 py-5 md:hidden md:p-5"
        >
          <div className="ml-10 flex flex-wrap items-start gap-2 md:ml-0">
            <Heading
              as="p"
              className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-indigo-400 text-center !text-white-A700"
            >
              G
            </Heading>
            <Heading as="p" className="tracking-[0.50px]">
              CRUD Food
            </Heading>
          </div>
          <Text size="xs" as="p" className="ml-10 mt-14 tracking-[1.00px] !text-gray-900_7f md:ml-0">
            MENU
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "21px 21px 21px 40px",
                gap: "12px",
                alignSelf: "start",
                color: "#273240",
                fontWeight: 400,
                fontSize: "12px",
              },
            }}
            className="mb-[521px] mt-5 flex w-full flex-col self-stretch"
          >
            <MenuItem icon={<Img src="images/img_cart_indigo_200.svg" alt="cart_one" className="h-[18px] w-[18px]" />}>
              Create Food
            </MenuItem>
            <MenuItem icon={<Img src="images/img_megaphone.svg" alt="megaphone_one" className="h-[18px] w-[18px]" />}>
              All Foods
            </MenuItem>
          </Menu>
        </Sidebar>

        {/* update food form section */}
        <div className="mt-[104px] flex w-[75%] flex-col items-start gap-[42px] md:w-full md:p-5">
          <Text size="lg" as="p" className="tracking-[0.50px] !text-blue_gray-900">
            Update Food Item
          </Text>
          <div className="flex items-start gap-[49px] self-stretch md:flex-col">
            <div className="flex w-full flex-col items-start gap-[37px]">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Text size="md" as="p" className="tracking-[0.50px]">
                  Food Name
                </Text>
                <Input shape="round" name="name" />
              </div>
              <div className="flex flex-col items-start gap-1.5 self-stretch">
                <Text size="md" as="p" className="tracking-[0.50px]">
                  Food Category{" "}
                </Text>
                <Input shape="round" name="edittext" />
              </div>
              <Button
                color="indigo_400"
                size="md"
                className="min-w-[158px] rounded-[10px] font-bold tracking-[0.50px] sm:px-5"
              >
                Update
              </Button>
            </div>
            <div className="flex w-full flex-col gap-[30px]">
              <div className="flex flex-col items-start gap-2">
                <Text size="md" as="p" className="tracking-[0.50px]">
                  Food Code
                </Text>
                <Input shape="round" name="edittext_one" />
              </div>
              <div className="flex flex-col items-start gap-[7px]">
                <Text size="md" as="p" className="tracking-[0.50px]">
                  QTY
                </Text>
                <Input shape="round" name="edittext_two" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[29px]">
              <div className="flex flex-col items-start gap-1.5">
                <Text size="md" as="p" className="tracking-[0.50px]">
                  Food Image
                </Text>
                <Input shape="round" name="edittext_three" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Text size="md" as="p" className="tracking-[0.50px]">
                  Price
                </Text>
                <Input shape="round" name="price" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
