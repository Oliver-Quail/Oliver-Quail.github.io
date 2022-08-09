-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2022 at 04:32 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kardinians_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminposts`
--

CREATE TABLE `adminposts` (
  `Id` int(11) NOT NULL,
  `LikedBy` varchar(500) NOT NULL,
  `PostId` int(11) NOT NULL,
  `DateSent` datetime NOT NULL DEFAULT current_timestamp(),
  `PostText` text NOT NULL,
  `PostImageLocation` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `t_messages`
--

CREATE TABLE `t_messages` (
  `Id` int(11) NOT NULL,
  `TimeSent` datetime NOT NULL DEFAULT current_timestamp(),
  `SenderId` int(11) NOT NULL,
  `ChatId` int(11) NOT NULL,
  `Chats` varchar(500) DEFAULT NULL,
  `MessageContents` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `t_users`
--

CREATE TABLE `t_users` (
  `Id` int(11) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `UserName` varchar(64) NOT NULL,
  `UserLevel` int(11) NOT NULL DEFAULT 1,
  `ProfilePictureLocation` varchar(256) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminposts`
--
ALTER TABLE `adminposts`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `t_messages`
--
ALTER TABLE `t_messages`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `t_users`
--
ALTER TABLE `t_users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminposts`
--
ALTER TABLE `adminposts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_messages`
--
ALTER TABLE `t_messages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `t_users`
--
ALTER TABLE `t_users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
