(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+wNj":function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return a}))},"4rKR":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t("cxan"),o=t("HbGN"),r=t("ERkP"),l=t.n(r),c=t("ZVZ0"),i=(l.a.createElement,{}),b="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)(b,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Drawer"),Object(c.b)("p",null,"A drawer dialog is a window overlaid on either the primary window or another dialog\nwindow. Contents behind a drawer dialog are ",Object(c.b)("strong",{parentName:"p"},"inert")," meaning that users cannot\ninteract with content behind the dialog."),Object(c.b)("h2",null,"Import"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Drawer"),": A ",Object(c.b)("inlineCode",{parentName:"li"},"Provider")," component that provides the context to the components it wraps."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DrawerOverlay"),": The overlay of the drawer."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DrawerContent"),": The content of the drawer."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DrawerHeader"),": The header of the drawer."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DrawerBody"),": The body of the drawer."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"DrawerFooter"),": The footer of the drawer.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@trendmicro/react-styled-ui';\n// or\nimport Drawer from '@trendmicro/react-styled-ui/Drawer';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("p",null,"Click the button below to toggle a drawer. The drawer will show up on either side of the screen."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const SelectableButton = ({ selected, ...props }) => {\n  const { colorMode } = useColorMode();\n  const { colors } = useTheme();\n  const focusColor = colors[\'blue:60\'];\n  let _selectedColor = {\n    dark: \'blue:60\',\n    light: \'blue:60\',\n  }[colorMode];\n  _selectedColor = colors[_selectedColor];\n  const getSelectedProps = {\n    bg: _selectedColor,\n    borderColor: _selectedColor,\n    color: \'white:emphasis\',\n    cursor: \'default\',\n    pointerEvents: \'none\',\n    zIndex: 1,\n    css: {\n      \'&::before\': {\n        backgroundColor: _selectedColor,\n      },\n      \'&:focus\': {\n        \':not(:active)\': {\n          borderColor: focusColor,\n          boxShadow: `inset 0 0 0 1px ${focusColor}`,\n        },\n        \'&::before\': {\n          backgroundColor: focusColor,\n        },\n      }\n    },\n    _hover: {\n      bg: _selectedColor,\n    },\n    _active: {\n      bg: _selectedColor,\n    },\n  };\n  return (\n    <Button\n      {...(selected && getSelectedProps)}\n      {...props}\n    />\n  );\n};\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst useToggle = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const toggle = () => setValue(value => !value);\n  return [value, toggle, setValue];\n};\n\nconst Divider = (props) => {\n  const { colorMode } = useColorMode();\n  const dividerColor = {\n    dark: \'white:secondary\',\n    light: \'black:secondary\',\n  }[colorMode];\n  return (\n    <Box mb="4x" pb="4x" borderBottom={1} borderBottomColor={dividerColor} {...props} />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb="4x">\n    <Flex display="inline-flex" {...props} />\n  </Box>\n);\n\nfunction Example() {\n  const { colorMode } = useColorMode();\n  const iconColor = {\n    dark: \'white:tertiary\',\n    light: \'black:tertiary\',\n  }[colorMode];\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [placement, changePlacementBy] = useSelection(\'right\');\n  const [ensureFocus, toggleEnsureFocus] = useToggle(false);\n  const [autoFocus, toggleAutoFocus] = useToggle(false);\n  const [backdrop, toggleBackdrop] = useToggle(true);\n  const [closeOnEsc, toggleCloseOnEsc] = useToggle(true);\n  const [closeOnOutsideClick, toggleCloseOnOutsideClick, setCloseOnOutsideClick] = useToggle(true);\n  const [isCloseButtonVisible, toggleIsCloseButtonVisible] = useToggle(true);\n  const [isOverlayVisible, toggleIsOverlayVisible, setIsOverlayVisible] = useToggle(true);\n  const [isHeaderVisible, toggleIsHeaderVisible] = useToggle(true);\n  const [isBodyVisible, toggleIsBodyVisible] = useToggle(true);\n  const [isFooterVisible, toggleIsFooterVisible] = useToggle(true);\n  const [size, changeSizeBy] = useSelection(\'sm\');\n\n  return (\n    <>\n      <Box>\n        <Button onClick={onOpen}>\n          Launch drawer\n        </Button>\n      </Box>\n      <Divider />\n      <FormGroup>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'left\', \'right\'].map(value => (\n            <SelectableButton\n              key={value}\n              selected={value === placement} \n              onClick={changePlacementBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </SelectableButton>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'auto\', \'sm\', \'md\', \'lg\', \'full\'].map(value => (\n            <SelectableButton\n              key={value}\n              selected={value === size}\n              onClick={changeSizeBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </SelectableButton>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={ensureFocus}\n            onChange={toggleEnsureFocus}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ensureFocus</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={autoFocus}\n            disabled={!ensureFocus}\n            onChange={toggleAutoFocus}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">autoFocus</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={backdrop}\n            onChange={(e) => {\n              const nextBackdrop = !backdrop;\n              if (!nextBackdrop) {\n                setCloseOnOutsideClick(false);\n                setIsOverlayVisible(false);\n              }\n\n              toggleBackdrop(e);\n            }}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">backdrop</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={isCloseButtonVisible}\n            disabled={!closeOnEsc && !closeOnOutsideClick}\n            onChange={toggleIsCloseButtonVisible}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">isCloseButtonVisible</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={closeOnEsc}\n            disabled={!isCloseButtonVisible && !closeOnOutsideClick}\n            onChange={toggleCloseOnEsc}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">closeOnEsc</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={closeOnOutsideClick}\n            disabled={(!isCloseButtonVisible && !closeOnEsc) || !backdrop}\n            onChange={toggleCloseOnOutsideClick}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">closeOnOutsideClick</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={isOverlayVisible}\n            disabled={!backdrop}\n            onChange={toggleIsOverlayVisible}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">DrawerOverlay</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isHeaderVisible} onChange={toggleIsHeaderVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">DrawerHeader</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isBodyVisible} onChange={toggleIsBodyVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">DrawerBody</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isFooterVisible} onChange={toggleIsFooterVisible} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">DrawerFooter</Text>\n        </TextLabel>\n      </FormGroup>\n      <Slide\n        in={isOpen}\n        duration={250}\n        from={placement}\n        finalHeight="100vh"\n      >\n        {styles => (\n          <Drawer\n            ensureFocus={ensureFocus}\n            autoFocus={autoFocus}\n            backdrop={backdrop}\n            isCloseButtonVisible={isCloseButtonVisible}\n            isOpen={true} // Set to `true` if a transition is active\n            closeOnEsc={closeOnEsc}\n            closeOnOutsideClick={closeOnOutsideClick}\n            onClose={onClose}\n            placement={placement}\n            size={size}\n          >\n            {isOverlayVisible && (\n              <DrawerOverlay opacity={styles.opacity} />\n            )}\n            <DrawerContent {...styles}>\n              {isHeaderVisible && (\n                <DrawerHeader>\n                  Sign In\n                </DrawerHeader>\n              )}\n              {isBodyVisible && (\n                <DrawerBody>\n                  <Grid\n                    templateColumns="auto 1fr"\n                    rowGap="2x"\n                    columnGap="3x"\n                    alignItems="center"\n                  >\n                    <Icon icon="user" color={iconColor} />\n                    <Input placeholder="User name" />\n                    <Icon icon="lock" color={iconColor} />\n                    <Input type="password" placeholder="Password" />\n                  </Grid>\n                </DrawerBody>\n              )}\n              {isFooterVisible && (\n                <DrawerFooter>\n                  <Button variant="primary" onClick={onClose} minWidth="20x">\n                    OK\n                  </Button>\n                  <Space width="2x" />\n                  <Button onClick={onClose} minWidth="20x">\n                    Cancel\n                  </Button>\n                </DrawerFooter>\n              )}\n            </DrawerContent>\n          </Drawer>\n        )}\n      </Slide>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h3",null,"Placements"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"placement")," prop to if you want to change the placement of the drawer. The value can be one of ",Object(c.b)("inlineCode",{parentName:"p"},"right")," (default) or ",Object(c.b)("inlineCode",{parentName:"p"},"left"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [placement, setPlacement] = React.useState(\'right\');\n  const handleClickBy = nextPlacement => (e) => {\n    setPlacement(nextPlacement);\n    onOpen();\n  };\n\n  return (\n    <>\n      <Stack direction="row" spacing="2x">\n        <Button onClick={handleClickBy(\'left\')}>\n          <Flex align="center">\n            <Icon icon="chevron-right" mr="2x" />\n            Left\n          </Flex>\n        </Button>\n        <Button onClick={handleClickBy(\'right\')}>\n          <Flex align="center">\n            <Icon icon="chevron-left" mr="2x" />\n            Right\n          </Flex>\n        </Button>\n      </Stack>\n      <Drawer\n        ensureFocus\n        autoFocus\n        backdrop\n        isCloseButtonVisible\n        isOpen={isOpen}\n        closeOnEsc\n        closeOnOutsideClick\n        onClose={onClose}\n        placement={placement}\n        size="sm"\n      >\n        <DrawerOverlay />\n        <DrawerContent>\n          <DrawerHeader>\n            Drawer Title\n          </DrawerHeader>\n          <DrawerBody>\n            <Lorem count={2} />\n          </DrawerBody>\n          <DrawerFooter>\n            <Button onClick={onClose}>\n              Close\n            </Button>\n          </DrawerFooter>\n        </DrawerContent>\n      </Drawer>\n    </>\n  );\n}\n')),Object(c.b)("h3",null,"Sizes"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(c.b)("inlineCode",{parentName:"p"},"Drawer"),". You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"auto"),", ",Object(c.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(c.b)("inlineCode",{parentName:"p"},"md"),", ",Object(c.b)("inlineCode",{parentName:"p"},"lg"),", or ",Object(c.b)("inlineCode",{parentName:"p"},"full"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n  const [size, setSize] = React.useState('auto');\n  const handleClickBy = nextSize => (e) => {\n    setSize(nextSize);\n    onOpen();\n  };\n\n  return (\n    <>\n      <Stack direction=\"row\" spacing=\"2x\">\n        <Button onClick={handleClickBy('auto')}>Auto width</Button>\n        <Button onClick={handleClickBy('sm')}>Small width</Button>\n        <Button onClick={handleClickBy('md')}>Medium width</Button>\n        <Button onClick={handleClickBy('lg')}>Large width</Button>\n        <Button onClick={handleClickBy('full')}>Full width</Button>\n      </Stack>\n      <Drawer\n        ensureFocus\n        autoFocus\n        backdrop\n        isCloseButtonVisible\n        isOpen={isOpen}\n        closeOnEsc\n        closeOnOutsideClick\n        onClose={onClose}\n        size={size}\n      >\n        <DrawerOverlay />\n        <DrawerContent>\n          <DrawerHeader>\n            Drawer Title\n          </DrawerHeader>\n          <DrawerBody>\n            <Lorem count={2} />\n          </DrawerBody>\n          <DrawerFooter>\n            <Button onClick={onClose}>\n              Close\n            </Button>\n          </DrawerFooter>\n        </DrawerContent>\n      </Drawer>\n    </>\n  );\n}\n")),Object(c.b)("h3",null,"Transitions"),Object(c.b)("p",null,"The drawer doesn't come with transitions by default. You can use the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./transition"}),Object(c.b)("inlineCode",{parentName:"a"},"Transition"))," components to provide simple transitions."),Object(c.b)("p",null,"When using transitions, you have to set ",Object(c.b)("inlineCode",{parentName:"p"},"isOpen")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true"),", or the transition will not take effect when closing the drawer."),Object(c.b)("h4",null,"Adding slide transition"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"import { Slide } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  const { isOpen, onOpen, onClose } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onOpen}>\n        Launch drawer\n      </Button>\n      <Slide\n        in={isOpen}\n        from="right"\n        finalHeight="100vh"\n      >\n        {styles => (\n          <Drawer\n            backdrop\n            isCloseButtonVisible\n            isOpen={true} // Set to `true` if a transition is active\n            closeOnEsc\n            closeOnOutsideClick\n            onClose={onClose}\n            placement="right"\n            size="sm"\n          >\n            <DrawerOverlay opacity={styles.opacity} />\n            <DrawerContent {...styles}>\n              <DrawerHeader>\n                Drawer Title\n              </DrawerHeader>\n              <DrawerBody>\n                <Lorem count={2} />\n              </DrawerBody>\n              <DrawerFooter>\n                <Button onClick={onClose}>\n                  Close\n                </Button>\n              </DrawerFooter>\n            </DrawerContent>\n          </Drawer>\n        )}\n      </Slide>\n    </>\n  );\n}\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("h3",null,"Drawer"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Drawer")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"ensureFocus"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", it will always bring the focus back to the ",Object(c.b)("inlineCode",{parentName:"td"},"Drawer")," descendants, which does not allow the focus to escape while open.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"autoFocus"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true")," and ",Object(c.b)("inlineCode",{parentName:"td"},"ensureFocus")," is ",Object(c.b)("inlineCode",{parentName:"td"},"true")," and ",Object(c.b)("inlineCode",{parentName:"td"},"initialFocusRef")," is not set, it will automatically set focus on the first focusable element.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"backdrop"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", it will wrap components with a backdrop to provide a click area for dismissing when clicking outside the drawer.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"finalFocusRef"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"React.ref"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The ",Object(c.b)("inlineCode",{parentName:"td"},"ref")," of element to receive focus when the drawer closes.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"initialFocusRef"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"React.ref"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The ",Object(c.b)("inlineCode",{parentName:"td"},"ref")," of the element to receive focus when the drawer opens.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isOpen"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the drawer is shown.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isCloseButtonVisible"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", a close button will appear on the right side.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"closeOnEsc"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", close the drawer when the ",Object(c.b)("inlineCode",{parentName:"td"},"esc")," key is pressed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"closeOnOutsideClick"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", close the drawer when click outside of the drawer. Note that this value will not have any effect when ",Object(c.b)("inlineCode",{parentName:"td"},"backdrop")," is set to ",Object(c.b)("inlineCode",{parentName:"td"},"true"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onClose"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Callback fired when the drawer closes.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"placement"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'right'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The placement of the drawer. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'right'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'auto'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The size of the drawer. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'auto'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'lg'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'full'"))))),Object(c.b)("h3",null,"DrawerOverlay"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DrawerOverlay")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(c.b)("h3",null,"DrawerContent"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DrawerContent")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component."),Object(c.b)("h3",null,"DrawerHeader"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DrawerHeader")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./pseudobox"}),Object(c.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component."),Object(c.b)("h3",null,"DrawerBody"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DrawerBody")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./pseudobox"}),Object(c.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component."),Object(c.b)("h3",null,"DrawerFooter"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"DrawerFooter")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./pseudobox"}),Object(c.b)("inlineCode",{parentName:"a"},"PseudoBox"))," component."))}s.isMDXComponent=!0},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t("+wNj");function o(e,n){if(null==e)return{};var t,o,r=Object(a.a)(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}},Ix5S:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drawer",function(){return t("4rKR")}])},Km8e:function(e,n,t){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t("ERkP"),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),s=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"===typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return(o.a.createElement(b.Provider,{value:n},e.children))},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return(o.a.createElement(o.a.Fragment,{},n))}},O=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return t?o.a.createElement(O,c(c({ref:n},b),{},{components:t})):o.a.createElement(O,c({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"===typeof e||a){var r=t.length,l=new Array(r);l[0]=O;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[d]="string"===typeof e?e:a,l[1]=c;for(var b=2;b<r;b++)l[b]=t[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))}},[["Ix5S",0,1]]]);