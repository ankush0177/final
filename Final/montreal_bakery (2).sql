-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2021 at 06:13 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `montreal_bakery`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `uname`, `pass`) VALUES
(1, 'admin', '123');

-- --------------------------------------------------------

--
-- Table structure for table `cakes`
--

CREATE TABLE `cakes` (
  `cid` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `flavour` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `kg` varchar(100) NOT NULL,
  `toppings` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `availability` varchar(100) NOT NULL,
  `images` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `ptype` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cakes`
--

INSERT INTO `cakes` (`cid`, `category`, `flavour`, `color`, `size`, `kg`, `toppings`, `price`, `availability`, `images`, `description`, `ptype`) VALUES
(1, 'Birthdays', 'Dark Choclate', 'Black', '10 Inc', '1 Kg', 'Nuts', '400', 'Available', 'https://2.bp.blogspot.com/-J9NEqknidMo/Vx_FNx7y9nI/AAAAAAAACzI/-iLnTO3pLP46RtdSYbBw5ugA9k9UiN1DwCKgB/s1600/Vanilla%2BCake%2BSySPME.jpg', 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.', 'Cakes'),
(3, 'Festivals', 'vanila', 'White', '10 Inc', '1 Kg', 'Strawberry', '100', 'Available', 'https://media.bakingo.com/sites/default/files/princess-elsa-theme-cake-them1307flav-A.jpg', 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.', 'Cakes'),
(4, 'NewYear', 'Red Velvet', 'Orange', '10 Inc', '1 Kg', 'Strawberry', '200', 'Available', 'https://2.bp.blogspot.com/-J9NEqknidMo/Vx_FNx7y9nI/AAAAAAAACzI/-iLnTO3pLP46RtdSYbBw5ugA9k9UiN1DwCKgB/s1600/Vanilla%2BCake%2BSySPME.jpg', 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.', 'Cakes'),
(6, 'Birthdays', 'Black Forest', 'Black', '10 Inc', '1 Kg', 'Nuts', '200', 'Available', 'https://5.imimg.com/data5/XA/KF/MY-41948677/black-current-cake-500x500.jpeg', 'Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. ... The most commonly used cake ingredients include flour, sugar, eggs, butter or oil or margarine, a liquid, and a leavening agent, such as baking soda or baking powder.', 'Cakes');

-- --------------------------------------------------------

--
-- Table structure for table `crossaints`
--

CREATE TABLE `crossaints` (
  `c_id` int(11) NOT NULL,
  `flavour` varchar(100) NOT NULL,
  `toppings` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  `image` text NOT NULL,
  `ptype` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crossaints`
--

INSERT INTO `crossaints` (`c_id`, `flavour`, `toppings`, `price`, `image`, `ptype`) VALUES
(1, 'Chocolate', 'cookies, nuts, fresh fruits ', '40', 'https://i.ytimg.com/vi/fMASA209R3s/maxresdefault.jpg', 'Crossaints'),
(2, 'Nuetella', 'cookies, nuts, fresh fruits ', '40', 'https://www.inspiredtaste.net/wp-content/uploads/2013/01/Sinfully-Easy-Chocolate-Croissant-Recipe-1-1200.jpg', 'Crossaints'),
(3, 'Peanut Butter', 'cookies, nuts, fresh fruits ', '40', 'https://www.jessicagavin.com/wp-content/uploads/2018/03/how-to-make-peanut-butter-1200.jpg', 'Crossaints'),
(4, 'Apples', 'fresh fruits ', '20', 'https://bluecure.org/wp-content/uploads/2016/03/apples-prostate-cancer-curing-foods.jpg', 'Crossaints'),
(6, 'Chocolate', 'Nuts', '550', 'https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800', 'Crossiants');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `fid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `oid` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`fid`, `name`, `email`, `phone`, `message`, `oid`, `status`) VALUES
(1, 'Ravi', 'ravi@gmail.com', '123', 'Good Service', '1', 'Completed'),
(3, 'Ravi', 'ravi@gmail.com', '89799', 'Good Service                              ', '1', 'Completed'),
(4, 'Sasank', 'sasank@gmail.com', '42131', 'Good Service. Thank you.\n                              ', '1', 'Completed'),
(5, 'sam', 'sam@gmail.com', '123', 'sam\n                              ', '1', 'Completed'),
(14, 'Ravi', 'ravi@gmail.com', '123-45-678', 'Good Service', '1', 'Completed'),
(15, 'Ravi', 'admin@gmail.com', '123-45-678', 'Good Service', '1', 'Completed'),
(16, 'sai', 'sai', '9876543210', '2', '1', 'Completed'),
(17, 'ss', 'ss', '1234567890', '2', '1', 'Completed'),
(18, 'ss', 'ss', '123456789', '2', '1', 'Completed'),
(19, 'ss', 'sssss@gmail.com', '12345', '2', '1', 'Completed'),
(20, 'ss', 'sssss', '12345', '2', '1', 'Completed'),
(21, 'ss', 'sai', '12345', '2', '1', 'Completed'),
(22, 'ss', 'ghd', '2', 'w', '1', 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `help`
--

CREATE TABLE `help` (
  `hid` int(11) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `cemail` varchar(100) NOT NULL,
  `cmsg` text NOT NULL,
  `reply` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `help`
--

INSERT INTO `help` (`hid`, `cname`, `cemail`, `cmsg`, `reply`) VALUES
(1, 'Sannith', 'Sannith@gmail.com', 'Your Website is good.', 'Thank You'),
(2, 'sam', 'sam@gmail.com', 'Your Cakes are super.', 'Thank You'),
(3, 'sam', 'sam@gmail.com', 'I need Special cake for Birthday                               ', ''),
(4, 'Sannith', 'sannith@gmail.com', 'Good Service\n                                    ', ''),
(8, 'Ravi', 'ravi@gmail.com', 'Good Service', ''),
(9, 'Sasank', 'ravi@gmail.com', 'Good Service', ''),
(10, 'sai', 'sai', 'dssf', ''),
(11, '11', 'sai', '113', ''),
(12, 'sai', 'sai', '113', '');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `oid` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `flavour` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `kg` varchar(50) NOT NULL,
  `toppings` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `tim` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `total` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL,
  `ptype` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`oid`, `category`, `flavour`, `color`, `size`, `kg`, `toppings`, `price`, `date`, `tim`, `quantity`, `total`, `email`, `status`, `ptype`) VALUES
(55, 'Birthdays', 'Black Forest', 'Black', '1', '1', 'Nuts', '200', '05/28/2021', '10AM', '3', '600', 'ravi@gmail.com', 'Cancelled', 'Cakes'),
(56, 'None', 'Strawberry', 'None', '1', 'None', 'Cherries', '100', '05/31/2021', '10AM', '2', '200', 'ravi@gmail.com', 'Order Placed', 'Shakes'),
(57, 'None', 'Nuetella', 'None', 'None', 'None', 'Cookies', '40', '05/31/2021', '10AM', '2', '80', 'ravi@gmail.com', 'Order Placed', 'Crossiants'),
(58, 'Birthdays', 'Dark Choclate', 'Black', '1', '1', 'Nuts', '400', '06/18/2021', '10AM', '1', '400', 'sai@gmail.com', 'Cancelled', 'Cakes'),
(59, 'Birthdays', 'Dark Choclate', 'Black', '1', '1', 'Nuts', '400', '06/25/2021', '10AM', '1', '400', 'sank@gmail.com', 'Cancelled', 'Cakes'),
(60, 'Birthdays', 'Dark Choclate', 'Black', '1', '1', 'Nuts', '400', '06/10/2021', '10AM', '1', '400', 'sank@gmail.com', 'Order Placed', 'Cakes');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(10) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `fname`, `email`, `pass`, `address`, `phone`) VALUES
(1, 'sasank', 'sasankgotru@gmail.com', 'sasank', 'vijayawada', '9542271335'),
(2, 'sam', 'sam@gmail.com', '123', '1231', '123'),
(3, 'Ravi NAdakuditi', 'ravi@gmail.com', '123', '123456789', '123456789'),
(4, 'rahul', 'r@gmail.com', '123', '123', '123'),
(7, 'sai', 'sai@gmail.com', '123', 'montreal', '0987654321'),
(9, 'sai', 'saik@gmail.com', '123', 'ss', '0987654321'),
(10, 'sai', 'san@gmail.com', '123', 'ss', '0987654321'),
(15, 'sai', 'sank@gmail.com', '123', 'ss', '0987654321');

-- --------------------------------------------------------

--
-- Table structure for table `shakes`
--

CREATE TABLE `shakes` (
  `sid` int(11) NOT NULL,
  `flavour` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `toppings` text NOT NULL,
  `price` varchar(100) NOT NULL,
  `photo` text NOT NULL,
  `ptype` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shakes`
--

INSERT INTO `shakes` (`sid`, `flavour`, `size`, `toppings`, `price`, `photo`, `ptype`) VALUES
(1, 'Vanilla', 'Small', 'cherries', '100', 'https://www.cookclickndevour.com/wp-content/uploads/2018/04/Vanilla-Milkshake-Recipe.jpg', 'Shakes'),
(2, 'Oreo', 'Small', 'sprinkles', '120', 'https://www.whiskaffair.com/wp-content/uploads/2019/04/Oreo-Milkshake-1-3.jpg', 'Shakes'),
(3, 'Strawberry', 'Small', 'Flakes and Nuts', '110', 'https://www.whiskaffair.com/wp-content/uploads/2019/05/Strawberry-Milkshake-2-3.jpg', 'Shakes'),
(4, 'Chocolate', 'Small', 'nuts', '60', 'https://veenaazmanov.com/wp-content/uploads/2017/03/Chocolate-Milkshake-Recipe2.jpg', 'Shakes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cakes`
--
ALTER TABLE `cakes`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `crossaints`
--
ALTER TABLE `crossaints`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `help`
--
ALTER TABLE `help`
  ADD PRIMARY KEY (`hid`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `shakes`
--
ALTER TABLE `shakes`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cakes`
--
ALTER TABLE `cakes`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `crossaints`
--
ALTER TABLE `crossaints`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `help`
--
ALTER TABLE `help`
  MODIFY `hid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `oid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `shakes`
--
ALTER TABLE `shakes`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
