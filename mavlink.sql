-- MySQL dump 10.13  Distrib 5.5.53, for debian-linux-gnu (armv7l)
--
-- Host: localhost    Database: mavlink
-- ------------------------------------------------------
-- Server version	5.5.53-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `idozites`
--

DROP TABLE IF EXISTS `idozites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idozites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utvonal` char(4) DEFAULT NULL,
  `ora1` char(2) DEFAULT NULL,
  `perc1` char(2) DEFAULT NULL,
  `ora2` char(2) DEFAULT NULL,
  `perc2` char(2) DEFAULT NULL,
  `ora3` char(2) DEFAULT NULL,
  `perc3` char(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idozites`
--

LOCK TABLES `idozites` WRITE;
/*!40000 ALTER TABLE `idozites` DISABLE KEYS */;
/*!40000 ALTER TABLE `idozites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jaror01`
--

DROP TABLE IF EXISTS `jaror01`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jaror01` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sof` char(2) DEFAULT 'GP',
  `sender` char(2) DEFAULT '1',
  `cmd` char(1) DEFAULT 'P',
  `dron_id` char(2) DEFAULT '01',
  `route_id` char(1) DEFAULT 'A',
  `route_nr` char(2) DEFAULT '01',
  `sorszam` char(2) DEFAULT NULL,
  `command` char(2) DEFAULT NULL,
  `param1` char(2) DEFAULT NULL,
  `param2` char(2) DEFAULT NULL,
  `param3` char(2) DEFAULT NULL,
  `param4` char(2) DEFAULT NULL,
  `param5` char(8) DEFAULT NULL,
  `param6` char(8) DEFAULT NULL,
  `param7` char(8) DEFAULT NULL,
  `controll` char(4) DEFAULT '0000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jaror01`
--

LOCK TABLES `jaror01` WRITE;
/*!40000 ALTER TABLE `jaror01` DISABLE KEYS */;
INSERT INTO `jaror01` VALUES (1,'GP','1','P','01','A','01','00','00','00','00','00','00','00000000','00000000','00000000','0000'),(2,'GP','1','P','01','A','01','01','16','00','00','00','00','423b75d2','41868787','40a00000','0000'),(3,'GP','1','P','01','A','01','02','14','00','00','00','00','423b75d5','41868773','00000000','0000');
/*!40000 ALTER TABLE `jaror01` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jaror02`
--

DROP TABLE IF EXISTS `jaror02`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jaror02` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sof` char(2) DEFAULT 'GP',
  `sender` char(2) DEFAULT '1',
  `cmd` char(1) DEFAULT 'P',
  `dron_id` char(2) DEFAULT '01',
  `route_id` char(1) DEFAULT 'A',
  `route_nr` char(2) DEFAULT '02',
  `sorszam` char(2) DEFAULT NULL,
  `command` char(2) DEFAULT NULL,
  `param1` char(2) DEFAULT NULL,
  `param2` char(2) DEFAULT NULL,
  `param3` char(2) DEFAULT NULL,
  `param4` char(2) DEFAULT NULL,
  `param5` char(8) DEFAULT NULL,
  `param6` char(8) DEFAULT NULL,
  `param7` char(8) DEFAULT NULL,
  `controll` char(4) DEFAULT '0000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jaror02`
--

LOCK TABLES `jaror02` WRITE;
/*!40000 ALTER TABLE `jaror02` DISABLE KEYS */;
INSERT INTO `jaror02` VALUES (1,'GP','1','P','01','A','02','00','00','00','00','00','00','00000000','00000000','00000000','0000'),(2,'GP','1','P','01','A','02','01','16','00','00','00','00','423b75cc','41868787','41200000','0000'),(3,'GP','1','P','01','A','02','02','10','00','00','00','00','423b75da','41868746','41200000','0000'),(4,'GP','1','P','01','A','02','03','10','00','00','00','00','423b75ba','41868751','41200000','0000'),(5,'GP','1','P','01','A','02','04','10','00','00','00','00','423b75be','418687bb','41200000','0000'),(6,'GP','1','P','01','A','02','05','10','00','00','00','00','423b75e3','418687a9','41200000','0000'),(7,'GP','1','P','01','A','02','06','14','00','00','00','00','423b75d9','41868789','00000000','0000');
/*!40000 ALTER TABLE `jaror02` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jaror03`
--

DROP TABLE IF EXISTS `jaror03`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jaror03` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sof` char(2) DEFAULT 'GP',
  `sender` char(2) DEFAULT '1',
  `cmd` char(1) DEFAULT 'P',
  `dron_id` char(2) DEFAULT '01',
  `route_id` char(1) DEFAULT 'A',
  `route_nr` char(2) DEFAULT '03',
  `sorszam` char(2) DEFAULT NULL,
  `command` char(2) DEFAULT NULL,
  `param1` char(2) DEFAULT NULL,
  `param2` char(2) DEFAULT NULL,
  `param3` char(2) DEFAULT NULL,
  `param4` char(2) DEFAULT NULL,
  `param5` char(8) DEFAULT NULL,
  `param6` char(8) DEFAULT NULL,
  `param7` char(8) DEFAULT NULL,
  `controll` char(4) DEFAULT '0000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jaror03`
--

LOCK TABLES `jaror03` WRITE;
/*!40000 ALTER TABLE `jaror03` DISABLE KEYS */;
INSERT INTO `jaror03` VALUES (1,'GP','1','P','01','A','03','00','00','00','00','00','00','00000000','00000000','00000000','0000'),(2,'GP','1','P','01','A','03','01','16','00','00','00','00','423b75d2','41868783','40a00000','0000'),(3,'GP','1','P','01','A','03','02','10','00','00','00','00','423b75d3','41868753','40a00000','0000'),(4,'GP','1','P','01','A','03','03','10','00','00','00','00','423b75bf','4186875a','40a00000','0000'),(5,'GP','1','P','01','A','03','04','10','00','00','00','00','423b75c3','418687ad','40a00000','0000'),(6,'GP','1','P','01','A','03','05','10','00','00','00','00','423b75d8','418687a3','40a00000','0000'),(7,'GP','1','P','01','A','03','06','14','00','00','00','00','423b75d5','41868779','00000000','0000');
/*!40000 ALTER TABLE `jaror03` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `riasztas01`
--

DROP TABLE IF EXISTS `riasztas01`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `riasztas01` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sof` char(2) DEFAULT 'GP',
  `sender` char(2) DEFAULT '1',
  `cmd` char(1) DEFAULT 'U',
  `dron_id` char(2) DEFAULT '01',
  `route_id` char(1) DEFAULT 'A',
  `route_nr` char(2) DEFAULT '01',
  `sorszam` char(2) DEFAULT NULL,
  `command` char(2) DEFAULT NULL,
  `param1` char(2) DEFAULT NULL,
  `param2` char(2) DEFAULT NULL,
  `param3` char(2) DEFAULT NULL,
  `param4` char(2) DEFAULT NULL,
  `param5` char(8) DEFAULT NULL,
  `param6` char(8) DEFAULT NULL,
  `param7` char(8) DEFAULT NULL,
  `controll` char(4) DEFAULT '0000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riasztas01`
--

LOCK TABLES `riasztas01` WRITE;
/*!40000 ALTER TABLE `riasztas01` DISABLE KEYS */;
INSERT INTO `riasztas01` VALUES (1,'GP','1','U','01','A','01','00','00','00','00','00','00','00000000','00000000','00000000','0000'),(2,'GP','1','U','01','A','01','01','16','00','00','00','00','423b7609','41868521','00000000','0000'),(3,'GP','1','U','01','A','01','02','10','00','00','00','00','423b782b','418688a5','00000000','0000'),(4,'GP','1','U','01','A','01','03','10','00','00','00','00','423b7503','41868e18','00000000','0000'),(5,'GP','1','U','01','A','01','04','14','00','00','00','00','423b74cd','41868592','00000000','0000');
/*!40000 ALTER TABLE `riasztas01` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-10  9:42:16
