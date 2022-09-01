import React from 'react';

import { FaShippingFast } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="2.5rem" color="#0f0f0f" />;

export const featuresData = [
    {
        name: 'Free Shipping',
        description: 'We offer free shippings for all ordered products and services in the State',
        icon: iconStyle(FaShippingFast),
        imgClass: 'one',
    },
    {
        name: 'Customer Satisfaction',
        description: 'We strive in growing customer relation and providing the best solution for each and every Individual.',
        icon: iconStyle(MdVerifiedUser),
        imgClass: 'two',
    },
    {
        name: 'Maintenance',
        description: 'Our system is highly affordable and we operate in the masses interest, which makes it highly sustainable',
        icon: iconStyle(GrHostMaintenance),
        imgClass: 'three',
    },
    {
        name: '24/7 Support',
        description: 'Our team is available at all times in case you need us',
        icon: iconStyle(BiSupport),
        imgClass: 'four',
    },
    {
        name: 'Money Back Guarantee',
        description: 'In the case of Refund which is not quite common, we organize money-back Guarantee for Trust sake',
        icon: iconStyle(BiDollar),
        imgClass: 'five',
    },
    {
        name: 'Award Winner',
        description:
            'Our superb customer service experience, Granted us multiple special Awards and Recognitions in United States and Diaspora',
        icon: iconStyle(FaAward),
        imgClass: 'six',
    },
];