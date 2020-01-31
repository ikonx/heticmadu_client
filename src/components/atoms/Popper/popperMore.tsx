import React from 'react';
import {
  ClickAwayListener,
  Grow,
  Paper,
  MenuItem
} from '@material-ui/core';
import {
  MoreHoriz,
  Edit,
  Delete
} from "@material-ui/icons";
import { PopperButton, PopperList, PopperStyle } from "./_style";

const PopperMore = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const prevOpen = React.useRef(open);

  const handleToggle = () => setOpen(prevOpen => !prevOpen);

  const handleClose = () => setOpen(false);

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    prevOpen.current = open;
  }, [open]);

  return (
      <div>
        <PopperButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreHoriz />
        </PopperButton>
        <PopperStyle open={open} anchorEl={anchorRef.current} placement='bottom-end' transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'right top' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <PopperList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                      <Edit />
                      Editer
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Delete />
                      Supprimer
                    </MenuItem>
                  </PopperList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </PopperStyle>
      </div>
  );
}

export default PopperMore;