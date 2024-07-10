import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const data = [
  { image: "images/img_rectangle_4.png" },
  { image: "images/img_rectangle_4_121x250.png" },
  { image: "images/img_rectangle_4_1.png" },
  { image: "images/img_rectangle_4_2.png" },
  { image: "images/img_rectangle_4_3.png" },
  { image: "images/img_rectangle_4_4.png" },
  { image: "images/img_rectangle_4_5.png" },
  { image: "images/img_rectangle_4_6.png" },
];

export default function AllFoodPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>All Foods - Explore Our Full Menu</title>
        <meta
          name="description"
          content="Browse our complete list of delicious foods including crispy fried chicken, fresh salads, and more. Edit or delete items to keep your menu up-to-date."
        />
      </Helmet>

      {/* main container section */}
      <div className="flex w-full items-start justify-center gap-10 bg-white-A700 pr-[70px] md:flex-col md:pr-5">
        {/* sidebar navigation section */}
        <Sidebar
          width="242px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="!sticky top-0 flex h-screen flex-col overflow-auto bg-gray-100 p-5 md:hidden"
        >
          <div className="ml-5 flex flex-wrap items-start gap-2 md:ml-0">
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
          <Text size="xs" as="p" className="ml-5 mt-14 tracking-[1.00px] !text-gray-900_7f md:ml-0">
            MENU
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "12px 12px 12px 20px",
                gap: "12px",
                color: "#a6abc8",
                fontWeight: 400,
                fontSize: "12px",
                borderRadius: "5px",
                [`&:hover, &.ps-active`]: { color: "#5a67ba", backgroundColor: "#707fdd19 !important" },
              },
            }}
            className="mb-[627px] mt-5 flex w-full flex-col self-stretch"
          >
            <MenuItem icon={<Img src="images/img_cart_indigo_200.svg" alt="cart_one" className="h-[18px] w-[18px]" />}>
              Create Food
            </MenuItem>
            <MenuItem icon={<Img src="images/img_user.svg" alt="user_one" className="h-[18px] w-[18px]" />}>
              All Foods
            </MenuItem>
          </Menu>
        </Sidebar>

        {/* content section */}
        <div className="mt-[104px] flex flex-1 flex-col items-start gap-10 md:self-stretch">
          <Text size="md" as="p" className="tracking-[0.50px]">
            All Food List
          </Text>

          {/* food list section */}
          <div className="grid grid-cols-4 gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1">
            {data.map((d, index) => (
              <div
                key={"allfood" + index}
                className="flex w-full flex-col items-center rounded-[10px] border border-solid border-blue_gray-100 bg-white-A700 pb-[18px]"
              >
                <div className="relative h-[121px] self-stretch md:h-auto">
                  <Img
                    src={d.image}
                    alt="image"
                    className="h-[121px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
                  />
                  <Button
                    size="xs"
                    shape="round"
                    className="absolute right-[12.00px] top-[15.00px] m-auto min-w-[64px] font-medium tracking-[0.50px]"
                  >
                    Tk: 45.00
                  </Button>
                </div>
                <Text
                  as="p"
                  className="mt-3.5 w-[90%] leading-5 tracking-[0.50px] !text-blue_gray-900_01 md:w-full md:p-5"
                >
                  Crispy fried chicken on a plate with salad and carrot
                </Text>
                <div className="relative ml-[9px] mt-[-4px] flex gap-5 self-start md:ml-0">
                  <Button color="gray_100_01" shape="round" className="min-w-[67px] font-inter sm:px-5">
                    Edit
                  </Button>
                  <Button color="deep_orange_50" shape="round" className="min-w-[67px] font-inter">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
