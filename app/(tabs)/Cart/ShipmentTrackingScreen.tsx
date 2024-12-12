import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Screen dimensions
const { width } = Dimensions.get('window');

// Mock shipment data (replace with actual API call)
const mockShipmentData = {
  trackingNumber: 'SHIP123456789',
  status: 'Pending',
  estimatedDelivery: 'December 15, 2024',
  currentLocation: 'Not Picked yet.',
  carrier: 'Global Express',
  progressPercentage: 0,
  trackingSteps: [
    {
      date: 'Dec 10, 2024 10:30 AM',
      location: 'Package yet to be pickedup!',
      description: 'pickup scheduled for today.',
      status: 'Pending',
    },
    // {
    //   date: "Dec 11, 2024 02:45 PM",
    //   location: "Sorting Facility",
    //   description: "Package sorted",
    //   status: "completed",
    // },
    // {
    //   date: "Dec 12, 2024 09:15 AM",
    //   location: "In Transit",
    //   description: "En route to destination",
    //   status: "current",
    // },
    // {
    //   date: 'Dec 15, 2024',
    //   location: 'Destination',
    //   description: 'Expected delivery',
    //   status: 'pending',
    // },
  ],
};

const ShipmentTrackingScreen = () => {
  const [shipment, setShipment] = useState(mockShipmentData);

  const renderProgressBar = () => {
    return (
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${shipment.progressPercentage}%` },
          ]}
        />
      </View>
    );
  };

  const renderTrackingStep = (
    step: {
      date: string;
      location: string;
      description: string;
      status: string;
    },
    index: number
  ) => {
    const isLastItem = index === shipment.trackingSteps.length - 1;
    const getStepColor = () => {
      switch (step.status) {
        case 'completed':
          return '#10B981';
        case 'current':
          return '#3B82F6';
        case 'pending':
          return '#9CA3AF';
        default:
          return '#9CA3AF';
      }
    };

    return (
      <View key={index} style={styles.timelineItem}>
        <View
          style={[
            styles.timelineDot,
            {
              backgroundColor: getStepColor(),
              borderColor: getStepColor(),
            },
          ]}
        />
        {!isLastItem && <View style={styles.timelineConnector} />}
        <View style={styles.timelineContent}>
          <Text style={styles.timelineDate}>{step.date}</Text>
          <Text style={styles.timelineLocation}>{step.location}</Text>
          <Text style={styles.timelineDescription}>{step.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#4A90E2', '#50C878']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerGradient}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name='arrow-back' size={24} color='white' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shipment Tracking</Text>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Shipment Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <View style={styles.summaryHeaderLeft}>
              <MaterialIcons name='local-shipping' size={32} color='#4A90E2' />
              <View style={styles.summaryHeaderText}>
                <Text style={styles.trackingNumberText}>
                  {shipment.trackingNumber}
                </Text>
                <Text style={styles.carrierText}>{shipment.carrier}</Text>
              </View>
            </View>
            <Text style={styles.statusBadge}>{shipment.status}</Text>
          </View>

          {/* Progress Visualization */}
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>
              Shipment Progress: {shipment.progressPercentage}%
            </Text>
            {renderProgressBar()}
          </View>

          {/* Shipment Details */}
          <View style={styles.detailsSection}>
            <View style={styles.detailItem}>
              <Ionicons name='location-outline' size={20} color='#6B7280' />
              <Text style={styles.detailText}>
                Current Location: {shipment.currentLocation}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name='calendar-outline' size={20} color='#6B7280' />
              <Text style={styles.detailText}>
                Est. Delivery: {shipment.estimatedDelivery}
              </Text>
            </View>
          </View>
        </View>

        {/* Tracking Timeline */}
        <View style={styles.timelineCard}>
          <Text style={styles.timelineTitle}>Tracking Timeline</Text>
          {shipment.trackingSteps.map(renderTrackingStep)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
  },
  headerGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  summaryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryHeaderText: {
    marginLeft: 12,
  },
  trackingNumberText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  carrierText: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  statusBadge: {
    backgroundColor: '#E8F4FF',
    color: '#4A90E2',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  progressSection: {
    marginBottom: 16,
  },
  progressLabel: {
    fontSize: 14,
    color: '#2C3E50',
    marginBottom: 8,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 4,
  },
  detailsSection: {
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    paddingTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#495057',
  },
  timelineCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 3,
    marginTop: 4,
  },
  timelineConnector: {
    width: 2,
    flex: 1,
    backgroundColor: '#E9ECEF',
    position: 'absolute',
    left: 7,
    top: 20,
    bottom: -16,
  },
  timelineContent: {
    flex: 1,
    marginLeft: 16,
  },
  timelineDate: {
    fontSize: 12,
    color: '#6C757D',
    marginBottom: 4,
  },
  timelineLocation: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  timelineDescription: {
    fontSize: 13,
    color: '#495057',
  },
});

export default ShipmentTrackingScreen;
