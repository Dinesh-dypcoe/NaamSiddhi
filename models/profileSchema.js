const mongoose = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');
const autoIncrement = AutoIncrementFactory(mongoose);

const profileSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        unique: true 
    },
    soundexCode: {
        firstName: String,
        lastName: String,
    },
    // Personal Information
    firstNameHindi: String,
    firstNameEnglish: {
        type: String,
        required: true
    },
    lastNameHindi: String,
    lastNameEnglish: String,
    dob: Date,
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    occupationHindi: String,
    occupationEnglish: String,
    mNumber: String,
    email: String,
    
    // Address Information
    address: {
        locationHindi: String,
        locationEnglish: String,
        cityHindi: String,
        cityEnglish: String,
        districtHindi: String,
        districtEnglish: String,
        stateHindi: String,
        stateEnglish: String,
        pincode: String
    },

    // Physical Description
    appearance: {
        height: Number,
        weight: Number,
        complexion: {
            type: String,
            enum: ['fair', 'medium', 'dark']
        },
        build: {
            type: String,
            enum: ['slim', 'average', 'athletic', 'heavy']
        },
        facialFeatures: {
            english: String,
            hindi: String
        },
        scars: {
            english: String,
            hindi: String
        },
        tattoos: {
            english: String,
            hindi: String
        },
        otherFeatures: {
            english: String,
            hindi: String
        }
    },

    // Family Information
    familyDetails: [{
        name: {
            english: String,
            hindi: String
        },
        relation: {
            english: String,
            hindi: String
        },
        contact: String,
        address: String
    }],

    // Case References
    cases: [{
        case: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Case'
        },
        role: {
            type: String,
            enum: ['accused', 'victim', 'witness', 'complainant']
        },
        addedAt: {
            type: Date,
            default: Date.now
        }
    }],

    // Identification
    identificationMarks: [{
        description: {
            english: String,
            hindi: String
        }
    }],
    idDocuments: [{
        type: {
            type: String,
            enum: ['aadhar', 'pan', 'voter', 'driving', 'passport', 'other']
        },
        number: String,
        verified: Boolean
    }],

    // Additional Information
    status: {
        type: String,
        enum: ['active', 'inactive', 'wanted', 'deceased'],
        default: 'active'
    },
    flags: [{
        type: String,
        description: String,
        addedAt: Date,
        addedBy: String
    }],
    notes: [{
        content: {
            english: String,
            hindi: String
        },
        addedBy: String,
        addedAt: {
            type: Date,
            default: Date.now
        }
    }],

    // Add these fields to your schema
    images: [{
        url: String,
        filename: String,
        type: {
            type: String,
            enum: ['profile', 'identification', 'evidence'],
            default: 'profile'
        },
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

// Apply auto-increment plugin
profileSchema.plugin(autoIncrement, { inc_field: 'id' });

// Add indexes for better search performance
profileSchema.index({ 'soundexCode.firstName': 1, 'soundexCode.lastName': 1 });
profileSchema.index({ firstNameEnglish: 1, lastNameEnglish: 1 });
profileSchema.index({ 'address.cityEnglish': 1 });
profileSchema.index({ mNumber: 1 });
profileSchema.index({ 'cases.case': 1 });

// Virtual for full name
profileSchema.virtual('fullNameEnglish').get(function() {
    return `${this.firstNameEnglish} ${this.lastNameEnglish}`.trim();
});

profileSchema.virtual('fullNameHindi').get(function() {
    return `${this.firstNameHindi} ${this.lastNameHindi}`.trim();
});

// Pre-save middleware for data validation
profileSchema.pre('save', function(next) {
    // Ensure at least one name field is provided
    if (!this.firstNameEnglish && !this.firstNameHindi) {
        next(new Error('At least one name field (English or Hindi) is required'));
    }
    next();
});

module.exports = mongoose.model('Profile', profileSchema);
