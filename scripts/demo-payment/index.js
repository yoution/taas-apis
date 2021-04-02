
const logger = require('../../src/services/PaymentService.js')


{ projectId: 17234, userHandle: "pshah_manager", amount: 3, billingAccountId: 80000069, name: "test payment for pshah_manager", description: "## test payment" }
{ projectId: 16839, userHandle: "pshah_customer", amount: 2, billingAccountId: 80000069, name: "test payment for pshah_customer", description: "## test payment" }

// run "createPayment" successfully using arguments { projectId: 17234, userHandle: "pshah_manager", amount: 3, billingAccountId: 80000069, name: "test payment for pshah_manager", description: "## test payment" }
// run "createPayment" with error using arguments { projectId: 16839, userHandle: "pshah_customer", amount: 2, billingAccountId: 80000069, name: "test payment for pshah_customer", description: "## test payment" }
// script should output completed challenge object if created successfully or error if some error happened
// create "scripts/demo-payment/README.md" with a guide on how to run the demo script
