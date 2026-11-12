// import { useAuth } from '../context/AuthContext';
// import { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { getEmployees, getSuppliers, getEquipment, getFields, getLivestock, getSales, getSalesDetails, getInventory, getCrops } from '../services/api';
// import FormModal from '../components/FormModal';
// import EmployeeForm from '../components/EmployeeForm';
// import CropForm from '../components/CropForm';
// import FieldForm from '../components/FieldForm';
// import LivestockForm from '../components/LivestockForm';
// import PenForm from '../components/PenForm';
// import EquipmentForm from '../components/EquipmentForm';
// import InventoryForm from '../components/InventoryForm';
// import SalesForm from '../components/SalesForm';
// import SalesDetailsForm from '../components/SalesDetailsForm';
// import SupplierForm from '../components/SupplierForm';
// import SupplierTable from '../components/SupplierTable';
// import ResupplyForm from '../components/ResupplyForm';
// import EmployeeTable from '../components/EmployeeTable';
// import CropTable from '../components/CropTable';
// import FieldTable from '../components/FieldTable';
// import LivestockTable from '../components/LivestockTable';
// import PenTable from '../components/PenTable';
// import EquipmentTable from '../components/EquipmentTable';
// import InventoryTable from '../components/InventoryTable';
// import SalesTable from '../components/SalesTable';
// import SalesDetailsTable from '../components/SalesDetailsTable';

// const Dashboard = () => {
//   const { user } = useAuth();
//   const [employees, setEmployees] = useState([]);
//   const [loadingEmployees, setLoadingEmployees] = useState(true);
//   const [errorEmployees, setErrorEmployees] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [suppliers, setSuppliers] = useState([]);
//   const [loadingSuppliers, setLoadingSuppliers] = useState(true);
//   const [errorSuppliers, setErrorSuppliers] = useState(null);
//   const [isResupplyModalOpen, setIsResupplyModalOpen] = useState(false);
//   const [resupplies, setResupplies] = useState([]);
//   const [loadingResupplies, setLoadingResupplies] = useState(true);
//   const [errorResupplies, setErrorResupplies] = useState(null);
//   const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);

//   const [equipment, setEquipment] = useState([]);
//   const [loadingEquipment, setLoadingEquipment] = useState(true);
//   const [errorEquipment, setErrorEquipment] = useState(null);
//   const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);

//   const [fields, setFields] = useState([]);
//   const [loadingFields, setLoadingFields] = useState(true);
//   const [errorFields, setErrorFields] = useState(null);
//   const [isFieldModalOpen, setIsFieldModalOpen] = useState(false);

//   const [livestock, setLivestock] = useState([]);
//   const [loadingLivestock, setLoadingLivestock] = useState(true);
//   const [errorLivestock, setErrorLivestock] = useState(null);
//   const [isPenModalOpen, setIsPenModalOpen] = useState(false);
//   const [pens, setPens] = useState([]);
//   const [loadingPens, setLoadingPens] = useState(true);
//   const [errorPens, setErrorPens] = useState(null);
//   const [isLivestockModalOpen, setIsLivestockModalOpen] = useState(false);
//   const [isCropModalOpen, setIsCropModalOpen] = useState(false);
//   const [crops, setCrops] = useState([]);
//   const [loadingCrops, setLoadingCrops] = useState(true);
//   const [errorCrops, setErrorCrops] = useState(null);

//   const [sales, setSales] = useState([]);
//   const [loadingSales, setLoadingSales] = useState(true);
//   const [errorSales, setErrorSales] = useState(null);
//   const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

//   const [salesDetails, setSalesDetails] = useState([]);
//   const [loadingSalesDetails, setLoadingSalesDetails] = useState(true);
//   const [errorSalesDetails, setErrorSalesDetails] = useState(null);
//   const [inventory, setInventory] = useState([]);
//   const [loadingInventory, setLoadingInventory] = useState(true);
//   const [errorInventory, setErrorInventory] = useState(null);
//   const [isSalesDetailsModalOpen, setIsSalesDetailsModalOpen] = useState(false);
//   const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);

//   useEffect(() => {
//     if (user && user.department === 'HR') {
//       const fetchEmployees = async () => {
//         try {
//           const response = await getEmployees();
//           setEmployees(response.data);
//         } catch (err) {
//           setErrorEmployees(err);
//         } finally {
//           setLoadingEmployees(false);
//         }
//       };
//       fetchEmployees();
//     }

//     if (user && user.department === 'procurement') {
//       const fetchSuppliers = async () => {
//         try {
//           const response = await getSuppliers();
//           setSuppliers(response.data);
//         } catch (err) {
//           setErrorSuppliers(err);
//         } finally {
//           setLoadingSuppliers(false);
//         }
//       };
//       fetchSuppliers();

//       const fetchResupplies = async () => {
//         try {
//           const response = await getResupplies();
//           setResupplies(response.data);
//         } catch (err) {
//           setErrorResupplies(err);
//         } finally {
//           setLoadingResupplies(false);
//         }
//       };
//       fetchResupplies();
//     }

//     if (user && user.department === 'equipment') {
//       const fetchEquipment = async () => {
//         try {
//           const response = await getEquipment();
//           setEquipment(response.data);
//         } catch (err) {
//           setErrorEquipment(err);
//         } finally {
//           setLoadingEquipment(false);
//         }
//       };
//       fetchEquipment();
//     }

//     if (user && user.department === 'field') {
//       const fetchFields = async () => {
//         try {
//           const response = await getFields();
//           setFields(response.data);
//         } catch (err) {
//           setErrorFields(err);
//         } finally {
//           setLoadingFields(false);
//         }
//       };
//       fetchFields();

//       const fetchLivestock = async () => {
//         try {
//           const response = await getLivestock();
//           setLivestock(response.data);
//         } catch (err) {
//           setErrorLivestock(err);
//         } finally {
//           setLoadingLivestock(false);
//         }
//       };
//       fetchLivestock();

//       const fetchCrops = async () => {
//         try {
//           const response = await getCrops();
//           setCrops(response.data);
//         } catch (err) {
//           setErrorCrops(err);
//         } finally {
//           setLoadingCrops(false);
//         }
//       };
//       fetchCrops();
//     }

//     if (user && user.department === 'sales') {
//       const fetchSales = async () => {
//         try {
//           const response = await getSales();
//           setSales(response.data);
//         } catch (err) {
//           setErrorSales(err);
//         } finally {
//           setLoadingSales(false);
//         }
//       };
//       fetchSales();

//       const fetchSalesDetails = async () => {
//         try {
//           const response = await getSalesDetails();
//           setSalesDetails(response.data);
//         } catch (err) {
//           setErrorSalesDetails(err);
//         } finally {
//           setLoadingSalesDetails(false);
//         }
//       };
//       fetchSalesDetails();
//     }

//     if (user && user.department === 'inventory') {
//       const fetchInventory = async () => {
//         try {
//           const response = await getInventory();
//           setInventory(response.data);
//         } catch (err) {
//           setErrorInventory(err);
//         } finally {
//           setLoadingInventory(false);
//         }
//       };
//       fetchInventory();
//     }
//   }, [user]);

//   const renderDashboardContent = () => {
//     if (!user) return null;

//     if (user.role === 'superAdmin') {
//       return <Navigate to="/super-admin" replace />;
//     }

//     switch (user.department) {
//       case 'sales':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">Sales Dashboard</h3>
//             {loadingSales && <p>Loading sales...</p>}
//             {errorSales && <p className="text-red-500">Error loading sales: {errorSales.message}</p>}
//             {!loadingSales && !errorSales && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Total Sales</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-green">{sales.length}</p>
//                 </div>
//                                                     <SalesTable sales={sales} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsSalesModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Sale
//               </button>
//             </div>

//             <FormModal isOpen={isSalesModalOpen} onClose={() => setIsSalesModalOpen(false)} title="Add New Sale">
//               <SalesForm onSuccess={() => {
//                 setIsSalesModalOpen(false);
//                 // Re-fetch sales after successful creation
//                 const fetchSales = async () => {
//                   try {
//                     const response = await getSales();
//                     setSales(response.data);
//                   } catch (err) {
//                     setErrorSales(err);
//                   } finally {
//                     setLoadingSales(false);
//                   }
//                 };
//                 fetchSales();
//               }} />
//             </FormModal>
//               </div>
//             )}
//             {loadingSalesDetails && <p>Loading sales details...</p>}
//             {errorSalesDetails && <p className="text-red-500">Error loading sales details: {errorSalesDetails.message}</p>}
//             {!loadingSalesDetails && !errorSalesDetails && (
//               <div className="bg-white p-6 rounded-lg shadow">
//                 <h4 className="text-lg font-medium text-gray-900 mb-4">Sales Details</h4>
//                                         <SalesDetailsTable salesDetails={salesDetails} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsSalesDetailsModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Sales Details
//               </button>
//             </div>

//             <FormModal isOpen={isSalesDetailsModalOpen} onClose={() => setIsSalesDetailsModalOpen(false)} title="Add New Sales Details">
//               <SalesDetailsForm onSuccess={() => {
//                 setIsSalesDetailsModalOpen(false);
//                 // Re-fetch sales details after successful creation
//                 const fetchSalesDetails = async () => {
//                   try {
//                     const response = await getSalesDetails();
//                     setSalesDetails(response.data);
//                   } catch (err) {
//                     setErrorSalesDetails(err);
//                   } finally {
//                     setLoadingSalesDetails(false);
//                   }
//                 };
//                 fetchSalesDetails();
//               }} />
//             </FormModal>
//               </div>
//             )}
//           </div>
//         );

//       case 'hr':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">HR Dashboard</h3>
//             {loadingEmployees && <p>Loading employees...</p>}
//             {errorEmployees && <p className="text-red-500">Error loading employees: {errorEmployees.message}</p>}
//             {!loadingEmployees && !errorEmployees && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Total Employees</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-green">{employees.length}</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Active Employees</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-orange">{employees.filter(emp => emp.isActive).length}</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Admins</h4>
//                   <p className="mt-2 text-3xl font-bold text-gray-600">{employees.filter(emp => emp.role === 'admin').length}</p>
//                 </div>
//               </div>
//             )}
//             <EmployeeTable employees={employees} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Employee
//               </button>
//             </div>

//             <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Employee">
//               <EmployeeForm onSuccess={() => {
//                 setIsModalOpen(false);
//                 // Re-fetch employees after successful creation
//                 const fetchEmployees = async () => {
//                   try {
//                     const response = await getEmployees();
//                     setEmployees(response.data);
//                   } catch (err) {
//                     setErrorEmployees(err);
//                   } finally {
//                     setLoadingEmployees(false);
//                   }
//                 };
//                 fetchEmployees();
//               }} />
//             </FormModal>
//           </div>
//         );

//       case 'procurement':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">Procurement Dashboard</h3>
//             {loadingSuppliers && <p>Loading suppliers...</p>}
//             {errorSuppliers && <p className="text-red-500">Error loading suppliers: {errorSuppliers.message}</p>}
//             {!loadingSuppliers && !errorSuppliers && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Total Suppliers</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-green">{suppliers.length}</p>
//                 </div>
//                                                                 <SupplierTable suppliers={suppliers} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsResupplyModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Create Resupply Request
//               </button>
//             </div>

//             <FormModal isOpen={isResupplyModalOpen} onClose={() => setIsResupplyModalOpen(false)} title="Create Resupply Request">
//               <ResupplyForm onSuccess={() => {
//                 setIsResupplyModalOpen(false);
//                 // Re-fetch resupplies after successful creation
//                 const fetchResupplies = async () => {
//                   try {
//                     const response = await getResupplies();
//                     setResupplies(response.data);
//                   } catch (err) {
//                     setErrorResupplies(err);
//                   } finally {
//                     setLoadingResupplies(false);
//                   }
//                 };
//                 fetchResupplies();
//               }} />
//             </FormModal>
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsSupplierModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Supplier
//               </button>
//             </div>

//             <FormModal isOpen={isSupplierModalOpen} onClose={() => setIsSupplierModalOpen(false)} title="Add New Supplier">
//               <SupplierForm onSuccess={() => {
//                 setIsSupplierModalOpen(false);
//                 // Re-fetch suppliers after successful creation
//                 const fetchSuppliers = async () => {
//                   try {
//                     const response = await getSuppliers();
//                     setSuppliers(response.data);
//                   } catch (err) {
//                     setErrorSuppliers(err);
//                   } finally {
//                     setLoadingSuppliers(false);
//                   }
//                 };
//                 fetchSuppliers();
//               }} />
//             </FormModal>
//               </div>
//             )}
//           </div>
//         );

//       case 'equipment':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">Equipment & Inventory Dashboard</h3>
//             {loadingEquipment && <p>Loading equipment...</p>}
//             {errorEquipment && <p className="text-red-500">Error loading equipment: {errorEquipment.message}</p>}
//             {!loadingEquipment && !errorEquipment && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Total Equipment</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-green">{equipment.length}</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">In Use</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-orange">{equipment.filter(eq => eq.isInUse).length}</p>
//                 </div>
//                                         <EquipmentTable equipment={equipment} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsEquipmentModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Equipment
//               </button>
//             </div>

//             <FormModal isOpen={isEquipmentModalOpen} onClose={() => setIsEquipmentModalOpen(false)} title="Add New Equipment">
//               <EquipmentForm onSuccess={() => {
//                 setIsEquipmentModalOpen(false);
//                 // Re-fetch equipment after successful creation
//                 const fetchEquipment = async () => {
//                   try {
//                     const response = await getEquipment();
//                     setEquipment(response.data);
//                   } catch (err) {
//                     setErrorEquipment(err);
//                   } finally {
//                     setLoadingEquipment(false);
//                   }
//                 };
//                 fetchEquipment();
//               }} />
//             </FormModal>
//               </div>
//             )}
//           </div>
//         );

//       case 'field':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">Field Management Dashboard</h3>
//             {loadingFields && <p>Loading fields...</p>}
//             {errorFields && <p className="text-red-500">Error loading fields: {errorFields.message}</p>}
//             {!loadingFields && !errorFields && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Active Fields</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-green">{fields.filter(f => f.isActive).length}</p>
//                 </div>
//                                                     <FieldTable fields={fields} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsFieldModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Field
//               </button>
//             </div>

//             <FormModal isOpen={isFieldModalOpen} onClose={() => setIsFieldModalOpen(false)} title="Add New Field">
//               <FieldForm onSuccess={() => {
//                 setIsFieldModalOpen(false);
//                 // Re-fetch fields after successful creation
//                 const fetchFields = async () => {
//                   try {
//                     const response = await getFields();
//                     setFields(response.data);
//                   } catch (err) {
//                     setErrorFields(err);
//                   } finally {
//                     setLoadingFields(false);
//                   }
//                 };
//                 fetchFields();
//               }} />
//             </FormModal>
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsCropModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Crop
//               </button>
//             </div>

//             <FormModal isOpen={isCropModalOpen} onClose={() => setIsCropModalOpen(false)} title="Add New Crop">
//               <CropForm onSuccess={() => {
//                 setIsCropModalOpen(false);
//                 // Re-fetch crops after successful creation
//                 const fetchCrops = async () => {
//                   try {
//                     const response = await getCrops();
//                     setCrops(response.data);
//                   } catch (err) {
//                     setErrorCrops(err);
//                   } finally {
//                     setLoadingCrops(false);
//                   }
//                 };
//                 fetchCrops();
//               }} />
//             </FormModal>
//               </div>
//             )}
//             {loadingLivestock && <p>Loading livestock...</p>}
//             {errorLivestock && <p className="text-red-500">Error loading livestock: {errorLivestock.message}</p>}
//             {!loadingLivestock && !errorLivestock && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Total Livestock</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-orange">{livestock.length}</p>
//                 </div>
//                                                     <LivestockTable livestock={livestock} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsPenModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Pen
//               </button>
//             </div>

//             <FormModal isOpen={isPenModalOpen} onClose={() => setIsPenModalOpen(false)} title="Add New Pen">
//               <PenForm onSuccess={() => {
//                 setIsPenModalOpen(false);
//                 // Re-fetch pens after successful creation
//                 const fetchPens = async () => {
//                   try {
//                     const response = await getPens();
//                     setPens(response.data);
//                   } catch (err) {
//                     // setErrorPens(err);
//                   } finally {
//                     // setLoadingPens(false);
//                   }
//                 };
//                 fetchPens();
//               }} />
//             </FormModal>
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsLivestockModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Livestock
//               </button>
//             </div>

//             <FormModal isOpen={isLivestockModalOpen} onClose={() => setIsLivestockModalOpen(false)} title="Add New Livestock">
//               <LivestockForm onSuccess={() => {
//                 setIsLivestockModalOpen(false);
//                 // Re-fetch livestock after successful creation
//                 const fetchLivestock = async () => {
//                   try {
//                     const response = await getLivestock();
//                     setLivestock(response.data);
//                   } catch (err) {
//                     setErrorLivestock(err);
//                   } finally {
//                     setLoadingLivestock(false);
//                   }
//                 };
//                 fetchLivestock();
//               }} />
//             </FormModal>
//               </div>
//             )}
//           </div>
//         );

//       case 'inventory':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">Inventory Dashboard</h3>
//             {loadingInventory && <p>Loading inventory...</p>}
//             {errorInventory && <p className="text-red-500">Error loading inventory: {errorInventory.message}</p>}
//             {!loadingInventory && !errorInventory && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <h4 className="text-sm font-medium text-gray-500">Total Inventory Items</h4>
//                   <p className="mt-2 text-3xl font-bold text-seasons-green">{inventory.length}</p>
//                 </div>
//                                         <InventoryTable inventory={inventory} />
//             <div className="mt-6">
//               <button
//                 onClick={() => setIsInventoryModalOpen(true)}
//                 className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
//               >
//                 Add New Inventory Item
//               </button>
//             </div>

//             <FormModal isOpen={isInventoryModalOpen} onClose={() => setIsInventoryModalOpen(false)} title="Add New Inventory Item">
//               <InventoryForm onSuccess={() => {
//                 setIsInventoryModalOpen(false);
//                 // Re-fetch inventory after successful creation
//                 const fetchInventory = async () => {
//                   try {
//                     const response = await getInventory();
//                     setInventory(response.data);
//                   } catch (err) {
//                     setErrorInventory(err);
//                   } finally {
//                     setLoadingInventory(false);
//                   }
//                 };
//                 fetchInventory();
//               }} />
//             </FormModal>
//               </div>
//             )}
//           </div>
//         );

//       default:
//         return (
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium text-gray-900">Welcome to Seasons Systems</h3>
//             <p className="text-gray-600">Select a department to view specific dashboard content.</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
//             {renderDashboardContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import { useAuth } from '../context/AuthContext';
import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  getEmployees,
  getSuppliers,
  getResupplies,
  getEquipment,
  getFields,
  getLivestock,
  getPens,
  getCrops,
  getSales,
  getSalesDetails,
  getInventory,
} from '../services/api';
import FormModal from '../components/FormModal';
import EmployeeForm from '../components/EmployeeForm';
import CropForm from '../components/CropForm';
import FieldForm from '../components/FieldForm';
import LivestockForm from '../components/LivestockForm';
import PenForm from '../components/PenForm';
import EquipmentForm from '../components/EquipmentForm';
import InventoryForm from '../components/InventoryForm';
import SalesForm from '../components/SalesForm';
import SalesDetailsForm from '../components/SalesDetailsForm';
import SupplierForm from '../components/SupplierForm';
import SupplierTable from '../components/SupplierTable';
import ResupplyForm from '../components/ResupplyForm';
import EmployeeTable from '../components/EmployeeTable';
import CropTable from '../components/CropTable';
import FieldTable from '../components/FieldTable';
import LivestockTable from '../components/LivestockTable';
import PenTable from '../components/PenTable';
import EquipmentTable from '../components/EquipmentTable';
import InventoryTable from '../components/InventoryTable';
import SalesTable from '../components/SalesTable';
import SalesDetailsTable from '../components/SalesDetailsTable';

/**
 * Runs a fetcher and always settles. Every failure path ends in an explicit
 * .catch, so a rejected request is stored in state instead of surfacing as an
 * unhandled rejection. Promise.resolve().then(...) also catches a fetcher that
 * throws synchronously (e.g. an import that does not exist).
 */
const load = (fetcher, setData, setError, setLoading) =>
  Promise.resolve()
    .then(() => fetcher())
    .then((response) => {
      setData(response.data);
      setError(null);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });

const StatCard = ({ label, value, colorClass }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h4 className="text-sm font-medium text-gray-500">{label}</h4>
    <p className={`mt-2 text-3xl font-bold ${colorClass}`}>{value}</p>
  </div>
);

const AddButton = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium text-white bg-seasons-green rounded-md hover:bg-seasons-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-seasons-green"
  >
    {children}
  </button>
);

const LoadStatus = ({ loading, error, label }) => (
  <>
    {loading && <p role="status">Loading {label}...</p>}
    {error && (
      <p role="alert" className="text-red-500">
        Error loading {label}: {error.message}
      </p>
    )}
  </>
);

const Dashboard = () => {
  const { user } = useAuth();
  const department = user?.department?.toLowerCase();

  // Only one modal is ever open, so a single key replaces eleven booleans.
  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [errorEmployees, setErrorEmployees] = useState(null);

  const [suppliers, setSuppliers] = useState([]);
  const [loadingSuppliers, setLoadingSuppliers] = useState(true);
  const [errorSuppliers, setErrorSuppliers] = useState(null);

  const [, setResupplies] = useState([]);
  const [, setLoadingResupplies] = useState(true);
  const [, setErrorResupplies] = useState(null);

  const [equipment, setEquipment] = useState([]);
  const [loadingEquipment, setLoadingEquipment] = useState(true);
  const [errorEquipment, setErrorEquipment] = useState(null);

  const [fields, setFields] = useState([]);
  const [loadingFields, setLoadingFields] = useState(true);
  const [errorFields, setErrorFields] = useState(null);

  const [crops, setCrops] = useState([]);
  const [loadingCrops, setLoadingCrops] = useState(true);
  const [errorCrops, setErrorCrops] = useState(null);

  const [livestock, setLivestock] = useState([]);
  const [loadingLivestock, setLoadingLivestock] = useState(true);
  const [errorLivestock, setErrorLivestock] = useState(null);

  const [pens, setPens] = useState([]);
  const [loadingPens, setLoadingPens] = useState(true);
  const [errorPens, setErrorPens] = useState(null);

  const [sales, setSales] = useState([]);
  const [loadingSales, setLoadingSales] = useState(true);
  const [errorSales, setErrorSales] = useState(null);

  const [salesDetails, setSalesDetails] = useState([]);
  const [loadingSalesDetails, setLoadingSalesDetails] = useState(true);
  const [errorSalesDetails, setErrorSalesDetails] = useState(null);

  const [inventory, setInventory] = useState([]);
  const [loadingInventory, setLoadingInventory] = useState(true);
  const [errorInventory, setErrorInventory] = useState(null);

  // One loader per resource, used both on mount and after a form succeeds.
  // State setters and API functions are stable, so an empty dep list is correct.
  // `void` marks these as deliberate fire-and-forget: load() already carries the
  // rejection handler, so callers get no floating promise to leak.
  const loaders = useMemo(
    () => ({
      employees: () => void load(getEmployees, setEmployees, setErrorEmployees, setLoadingEmployees),
      suppliers: () => void load(getSuppliers, setSuppliers, setErrorSuppliers, setLoadingSuppliers),
      resupplies: () =>
        void load(getResupplies, setResupplies, setErrorResupplies, setLoadingResupplies),
      equipment: () => void load(getEquipment, setEquipment, setErrorEquipment, setLoadingEquipment),
      fields: () => void load(getFields, setFields, setErrorFields, setLoadingFields),
      crops: () => void load(getCrops, setCrops, setErrorCrops, setLoadingCrops),
      livestock: () => void load(getLivestock, setLivestock, setErrorLivestock, setLoadingLivestock),
      pens: () => void load(getPens, setPens, setErrorPens, setLoadingPens),
      sales: () => void load(getSales, setSales, setErrorSales, setLoadingSales),
      salesDetails: () =>
        void load(getSalesDetails, setSalesDetails, setErrorSalesDetails, setLoadingSalesDetails),
      inventory: () => void load(getInventory, setInventory, setErrorInventory, setLoadingInventory),
    }),
    []
  );

  useEffect(() => {
    if (!department || user?.role === 'superAdmin') return;

    switch (department) {
      case 'hr':
        loaders.employees();
        break;
      case 'procurement':
        loaders.suppliers();
        loaders.resupplies();
        break;
      case 'equipment':
        loaders.equipment();
        break;
      case 'field':
        loaders.fields();
        loaders.crops();
        loaders.livestock();
        loaders.pens();
        break;
      case 'sales':
        loaders.sales();
        loaders.salesDetails();
        break;
      case 'inventory':
        loaders.inventory();
        break;
      default:
        break;
    }
  }, [department, user?.role, loaders]);

  const renderDashboardContent = () => {
    if (!user) return null;

    if (user.role === 'superAdmin') {
      return <Navigate to="/super-admin" replace />;
    }

    switch (department) {
      case 'sales':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Sales Dashboard</h3>

            <LoadStatus loading={loadingSales} error={errorSales} label="sales" />
            {!loadingSales && !errorSales && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard label="Total Sales" value={sales.length} colorClass="text-seasons-green" />
                </div>
                <SalesTable sales={sales} />
              </>
            )}
            <AddButton onClick={() => setOpenModal('sale')}>Add New Sale</AddButton>
            <FormModal isOpen={openModal === 'sale'} onClose={closeModal} title="Add New Sale">
              <SalesForm
                onSuccess={() => {
                  closeModal();
                  loaders.sales();
                }}
              />
            </FormModal>

            <LoadStatus loading={loadingSalesDetails} error={errorSalesDetails} label="sales details" />
            {!loadingSalesDetails && !errorSalesDetails && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Sales Details</h4>
                <SalesDetailsTable salesDetails={salesDetails} />
              </div>
            )}
            <AddButton onClick={() => setOpenModal('salesDetails')}>Add New Sales Details</AddButton>
            <FormModal
              isOpen={openModal === 'salesDetails'}
              onClose={closeModal}
              title="Add New Sales Details"
            >
              <SalesDetailsForm
                onSuccess={() => {
                  closeModal();
                  loaders.salesDetails();
                }}
              />
            </FormModal>
          </div>
        );

      case 'hr':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">HR Dashboard</h3>

            <LoadStatus loading={loadingEmployees} error={errorEmployees} label="employees" />
            {!loadingEmployees && !errorEmployees && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    label="Total Employees"
                    value={employees.length}
                    colorClass="text-seasons-green"
                  />
                  <StatCard
                    label="Active Employees"
                    value={employees.filter((emp) => emp.isActive).length}
                    colorClass="text-seasons-orange"
                  />
                  <StatCard
                    label="Admins"
                    value={employees.filter((emp) => emp.role === 'admin').length}
                    colorClass="text-gray-600"
                  />
                </div>
                <EmployeeTable employees={employees} />
              </>
            )}
            <AddButton onClick={() => setOpenModal('employee')}>Add New Employee</AddButton>
            <FormModal isOpen={openModal === 'employee'} onClose={closeModal} title="Add New Employee">
              <EmployeeForm
                onSuccess={() => {
                  closeModal();
                  loaders.employees();
                }}
              />
            </FormModal>
          </div>
        );

      case 'procurement':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Procurement Dashboard</h3>

            <LoadStatus loading={loadingSuppliers} error={errorSuppliers} label="suppliers" />
            {!loadingSuppliers && !errorSuppliers && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    label="Total Suppliers"
                    value={suppliers.length}
                    colorClass="text-seasons-green"
                  />
                </div>
                <SupplierTable suppliers={suppliers} />
              </>
            )}
            <div className="flex flex-wrap gap-4">
              <AddButton onClick={() => setOpenModal('resupply')}>Create Resupply Request</AddButton>
              <AddButton onClick={() => setOpenModal('supplier')}>Add New Supplier</AddButton>
            </div>

            <FormModal
              isOpen={openModal === 'resupply'}
              onClose={closeModal}
              title="Create Resupply Request"
            >
              <ResupplyForm
                onSuccess={() => {
                  closeModal();
                  loaders.resupplies();
                }}
              />
            </FormModal>
            <FormModal isOpen={openModal === 'supplier'} onClose={closeModal} title="Add New Supplier">
              <SupplierForm
                onSuccess={() => {
                  closeModal();
                  loaders.suppliers();
                }}
              />
            </FormModal>
          </div>
        );

      case 'equipment':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Equipment & Inventory Dashboard</h3>

            <LoadStatus loading={loadingEquipment} error={errorEquipment} label="equipment" />
            {!loadingEquipment && !errorEquipment && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    label="Total Equipment"
                    value={equipment.length}
                    colorClass="text-seasons-green"
                  />
                  <StatCard
                    label="In Use"
                    value={equipment.filter((eq) => eq.isInUse).length}
                    colorClass="text-seasons-orange"
                  />
                </div>
                <EquipmentTable equipment={equipment} />
              </>
            )}
            <AddButton onClick={() => setOpenModal('equipment')}>Add New Equipment</AddButton>
            <FormModal
              isOpen={openModal === 'equipment'}
              onClose={closeModal}
              title="Add New Equipment"
            >
              <EquipmentForm
                onSuccess={() => {
                  closeModal();
                  loaders.equipment();
                }}
              />
            </FormModal>
          </div>
        );

      case 'field':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Field Management Dashboard</h3>

            <LoadStatus loading={loadingFields} error={errorFields} label="fields" />
            {!loadingFields && !errorFields && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    label="Active Fields"
                    value={fields.filter((f) => f.isActive).length}
                    colorClass="text-seasons-green"
                  />
                </div>
                <FieldTable fields={fields} />
              </>
            )}
            <AddButton onClick={() => setOpenModal('field')}>Add New Field</AddButton>
            <FormModal isOpen={openModal === 'field'} onClose={closeModal} title="Add New Field">
              <FieldForm
                onSuccess={() => {
                  closeModal();
                  loaders.fields();
                }}
              />
            </FormModal>

            <LoadStatus loading={loadingCrops} error={errorCrops} label="crops" />
            {!loadingCrops && !errorCrops && <CropTable crops={crops} />}
            <AddButton onClick={() => setOpenModal('crop')}>Add New Crop</AddButton>
            <FormModal isOpen={openModal === 'crop'} onClose={closeModal} title="Add New Crop">
              <CropForm
                onSuccess={() => {
                  closeModal();
                  loaders.crops();
                }}
              />
            </FormModal>

            <LoadStatus loading={loadingLivestock} error={errorLivestock} label="livestock" />
            {!loadingLivestock && !errorLivestock && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    label="Total Livestock"
                    value={livestock.length}
                    colorClass="text-seasons-orange"
                  />
                </div>
                <LivestockTable livestock={livestock} />
              </>
            )}
            <AddButton onClick={() => setOpenModal('livestock')}>Add New Livestock</AddButton>
            <FormModal
              isOpen={openModal === 'livestock'}
              onClose={closeModal}
              title="Add New Livestock"
            >
              <LivestockForm
                onSuccess={() => {
                  closeModal();
                  loaders.livestock();
                }}
              />
            </FormModal>

            <LoadStatus loading={loadingPens} error={errorPens} label="pens" />
            {!loadingPens && !errorPens && <PenTable pens={pens} />}
            <AddButton onClick={() => setOpenModal('pen')}>Add New Pen</AddButton>
            <FormModal isOpen={openModal === 'pen'} onClose={closeModal} title="Add New Pen">
              <PenForm
                onSuccess={() => {
                  closeModal();
                  loaders.pens();
                }}
              />
            </FormModal>
          </div>
        );

      case 'inventory':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Inventory Dashboard</h3>

            <LoadStatus loading={loadingInventory} error={errorInventory} label="inventory" />
            {!loadingInventory && !errorInventory && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    label="Total Inventory Items"
                    value={inventory.length}
                    colorClass="text-seasons-green"
                  />
                </div>
                <InventoryTable inventory={inventory} />
              </>
            )}
            <AddButton onClick={() => setOpenModal('inventory')}>Add New Inventory Item</AddButton>
            <FormModal
              isOpen={openModal === 'inventory'}
              onClose={closeModal}
              title="Add New Inventory Item"
            >
              <InventoryForm
                onSuccess={() => {
                  closeModal();
                  loaders.inventory();
                }}
              />
            </FormModal>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Welcome to Seasons Systems</h3>
            <p className="text-gray-600">Select a department to view specific dashboard content.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
            {renderDashboardContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
