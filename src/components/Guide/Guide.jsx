import React from 'react';
import Button from '../HOCS/Button';
import Input from '../HOCS/Input';
import Line from '../HOCS/Line';
import Card from '../HOCS/Card';
import ButtonsGroup from '../HOCS/ButtonGroup';
import Icon from '../HOCS/Icon';
import FlexBox from '../HOCS/FlexBox';
import CodeBox from '../HOCS/CodeBox';
import TextArea from '../HOCS/TextArea';

const Guide = () => {
    return (
        <div className="container">
            <div className="guide-wrapper">
                <div className="guide-block">
                    <h2>Buttons Type</h2>
                    <div className="guide-block__content">
                        <Button>Default</Button>
                        <Button primary>Primary</Button>
                        <Button secondary>Secondary</Button>
                        <Button outline>Outline</Button>
                        <Button danger>Danger</Button>
                        <Button warning>Warning</Button>
                        <Button info>Info</Button>
                        <Button icon>Icon</Button>
                    </div>
                </div>
                <div className="guide-block">
                    <h2>Buttons Text</h2>
                    <div className="guide-block__content">
                        <Button>Default</Button>
                        <Button primary uppercase>Uppercase</Button>
                        <Button secondary lowercase>Lowercase</Button>
                        <Button danger bolder>Bolder</Button>
                        <Button danger bold>Bold</Button>
                        <Button danger extraBold>Extra Bold</Button>
                        <Button info uppercase bold>Uppercase Bold</Button>
                        <Button warning lowercase bold>Lowercase Bold</Button>
                    </div>
                </div>
                <div className="guide-block">
                    <h2>Buttons Size</h2>
                    <div className="guide-block__content">
                        <Button outline size="sm">Small</Button>
                        <Button>Default</Button>
                        <Button primary size="lg">Large</Button>
                        <Button warning size="xl">Extra Large</Button>
                    </div>
                </div>
                <div className="guide-block">
                    <h2>Buttons with Icons</h2>
                    <div className="guide-block__content">
                        <Button info size="sm" iconLeft="cancel"/>
                        <Button primary iconLeft="cancel"/>
                        <Button iconLeft="code" iconRight="code">Icon Left & Right</Button>
                        <Button size="lg" primary iconLeft="face" iconRight="fingerprint"/>
                        <Button outline size="lg" iconRight="thumb_down_alt">Icon Right</Button>
                        <Button outline size="lg" iconRight="favorite_border"/>
                        <Button warning size="xl" iconLeft="thumb_up_alt">Icon Left</Button>
                        <Button icon size="lg" iconRight="settings"/>
                    </div>
                    <CodeBox>
                        {'<Button type textTransform fontWeight size="size" iconLeft="icon_name" iconRight="icon_name">Button_Name</Button>'}
                        <p>type: none | outline | primary | secondary | danger | warning | info</p>
                        <p>textTransform: none | uppercase | lowercase </p>
                        <p>fontWeight: none | bold | bolder | extraBold </p>
                        <p>iconLeft: none | string</p>
                        <p>iconRight: none | string</p>
                        <p>Button_Name: none | string</p>
                    </CodeBox>
                </div>
                <div className="guide-block">
                    <h2>Buttons Group</h2>
                    <div className="guide-block__content">
                        <ButtonsGroup>
                            <Button iconLeft="assignment_ind">First Button</Button>
                            <Button iconLeft="backup" extraBold>Second Button</Button>
                            <Button iconLeft="arrow_circle_down">Third Button</Button>
                        </ButtonsGroup>
                        <ButtonsGroup>
                            <Button primary size="xl" iconLeft="assignment_ind"/>
                            <Button primary size="xl" iconLeft="backup"/>
                            <Button primary size="xl" iconLeft="arrow_circle_down"/>
                            <Button primary size="xl" iconLeft="build"/>
                        </ButtonsGroup>
                        <ButtonsGroup>
                            <Button primary size="lg" iconLeft="assignment_ind"/>
                            <Button warning size="lg" iconLeft="backup"/>
                            <Button secondary size="lg" iconLeft="arrow_circle_down"/>
                            <Button default size="lg" iconLeft="build"/>
                        </ButtonsGroup>
                    </div>
                    <CodeBox>
                        {'<ButtonsGroup>'}
                        {'{children}'}
                        {'</ButtonsGroup>'}
                        <p>children: {'<Button>Button</Button>'}</p>
                    </CodeBox>
                </div>
                <div className="guide-block">
                    <h2>Input</h2>
                    <div className="guide-block__content">
                        <Input id="default" label="Default"/>
                        <Input id="default-large" large label="Default"/>
                        <Input id="outline" label="Outline" outline/>
                        <Input id="outline-large" large label="Outline" outline/>
                        <Input id="outline-large-wil" iconLeft="location_on" large label="Outline Large with Icon Left" outline/>
                        <Input id="default-large-wil" iconLeft="location_on" large label="Default Large with Icon Left"/>
                        <Input id="outline-wil" iconLeft="location_on" label="Outline with Icon Left" outline/>
                        <Input id="default-wil" iconLeft="location_on" label="Default with Icon Left"/>
                        <Input id="outline-large-wir" iconRight="location_on" large label="Outline Large with Icon Right"
                               outline/>
                        <Input id="default-large-wir" iconRight="location_on" large label="Default Large with Icon Right"/>
                        <Input id="outline-wir" iconRight="location_on" label="Outline with Icon Right" outline/>
                        <Input id="default-wir" iconRight="location_on" label="Default with Icon Right"/>
                    </div>
                    <CodeBox>
                        {'<Input id="name" label="label_name" iconLeft="icon_name" iconRight="icon_name" type size />'}
                        <p>id: string</p>
                        <p>label_name: string</p>
                        <p>iconLeft: none | string</p>
                        <p>iconRight: none | string</p>
                        <p>type: none | outline</p>
                        <p>size: none | large</p>
                    </CodeBox>
                </div>
                <div className="guide-block">
                    <h2>TextArea</h2>
                    <div className="guide-block__content">
                        <TextArea name="default-textarea"
                                  id="default-textarea"
                                  label="Default"
                                  rows="2"
                                  fullWidth
                        />
                    </div>
                    <CodeBox>
                        {'<TextArea id="name" label="label_name" iconLeft="icon_name" iconRight="icon_name" type size />'}
                        <p>id: string</p>
                        <p>label_name: string</p>
                    </CodeBox>
                </div>
                <div className="guide-block">
                    <h2>Line</h2>
                    <div className="guide-block__content">
                        <Line color="primary"/>
                        <Line color="secondary"/>
                        <Line color="danger"/>
                        <Line color="warning"/>
                        <Line color="info"/>
                    </div>
                    <CodeBox>
                        {'<Line color="type"/>'}
                        <p>type: none | primary | secondary | danger | warning | info</p>
                    </CodeBox>
                </div>
                <div className="guide-block">
                    <h2>Card</h2>
                    <div className="guide-block__content">
                        <Card>
                            <h3>Card Title</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate debitis, eaque
                                eius illo inventore iure magnam minima obcaecati pariatur qui sapiente? Consectetur,
                                distinctio eligendi explicabo facere magni quasi voluptate.
                            </div>
                        </Card>
                    </div>
                    <CodeBox>
                        {'<Card>Content</Card>'}
                    </CodeBox>
                </div>
                <div className="guide-block">
                    <h2>Icons</h2>
                    <div className="guide-block__content">
                        <FlexBox alignment="sa-c" fullWidth>
                            <Icon data="lock" size="xxs"/>
                            <Icon data="history" size="xs"/>
                            <Icon primary data="opacity" size="sm"/>
                            <Icon secondary data="room" size="md"/>
                            <Icon danger data="drafts" size="lg"/>
                            <Icon warning data="downloading" size="xl"/>
                            <Icon info data="security" size="xxl"/>
                        </FlexBox>
                    </div>
                    <CodeBox>
                        {'<Icon type data="icon_name" size="size" />'}
                        <p>type: none | primary | secondary | danger | warning | info</p>
                        <p>size: none | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'</p>
                    </CodeBox>
                </div>
            </div>
        </div>
    );
};

export default Guide;
