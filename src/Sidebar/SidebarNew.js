import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SidebarNew() {
  return (
    <div className="sidebar">
      <Sidebar>
        <Menu>
          <SubMenu label="Dasboard">
            <MenuItem>test</MenuItem>
            <MenuItem>test2</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
